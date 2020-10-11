const { MongoClient, ObjectId, ObjectID } = require('mongodb')
// const QueryString = require('qs')

const url = 'mongodb://localhost:27017'
const dbName = 'duiTang'

//连接数据库
async function connect() {
    const client = await MongoClient.connect(url,{ useUnifiedTopology: true })
    const db = client.db(dbName)
    return { client, db }
}

//删除
async function remove(colName, query) {
    const { client, db } = await connect()
    const collection = db.collection(colName)
    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }
    const result = await collection.deleteMany(query)
    client.close()
    return result
}

//修改
async function updata(colName, query, data) {
    const { client, db } = await connect()
    const collection = db.collection(colName)
    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }
    const result = await collection.updateMany(query, data);
    //关闭数据库
    client.close()
    //返回
    return result
}
//增加
async function insert(colName, data) {
    const { client, db } = await connect()
    const collection = db.collection(colName)

    const result = await collection[Array.isArray(data) ? 'insertMany' : 'insertOne'](data)
    client.close()
    return result
}

//查询 
async function find(colName, query = {}, options = {}) {
    const { client, db } = await connect()
    const collection = db.collection(colName)

    //传入的_id处理

    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }
    //获取数据库数据
    const opt = {}
    if (options.field) {
        opt.projection = options.field
    }
    let result = collection.find(query, opt)

    //判断是否跳过一些数据
    if (options.skip) {
        result = result.skip(options.skip)
    }
    //判断获取数据数量
    if (options.limit) {
        result = result.limit(options.limit)
    }
    //排序
    if (options.sort) {
        let key, value
        //按什么排序
        key = options.sort[0]
        //判断排序方式
        if (options.sort.length > 1) {
            value = options.sort[1] - 0
        } else {
            value = -1
        }
        //将排序的值传入赋值给输出的数据
        result = result.sort({
            [key]: value
        })
    }
    //数据数量
    let tal
    if (options.tal === 'true') {
        tal = await result.count()
    }
    const data = await result.toArray()
    //关闭数据库
    client.close()
    if (tal) {
        
        return {
            data, tal
        }
    }
    return data
}

async function findsend(colName, query = {}, options = {}) {
    const { client, db } = await connect()
    const collection = db.collection(colName)
    //传入的_id处理
    // console.log( query,'排序')

    // if (query._id && typeof query._id === 'string') {
    //     query._id = ObjectId(query._id)
    // }
    // console.log(query,typeof query.id,'你好')
    if (options.sort) {
        let key, value
        //按什么排序
        key = options.sort[0]
        //判断排序方式
        if (options.sort.length > 1) {
            value = options.sort[1] - 0
        } else {
            value = -1
        }
        //将排序的值传入赋值给输出的数据
        options.sort = { [key]: value }
    }

    let result
    if (options.single) {

        result = collection.aggregate([
            {
                $match: query,
            },
            {
                // $match: {'_id':''},
                $lookup:
                {
                    from: "username",
                    localField: options.sender_id,
                    foreignField: "id",
                    as: "sender"
                }
            },
            { $unwind: "$sender" },
            {
                $project: { 'sender.password': false }
            }
        ])
    } else {
        result = collection.aggregate([{
                $sort: options.sort
            }, {
                $skip: options.skip
            }, {
                $limit: options.limit
            }, 
            {
           
                $lookup:
                {
                    from: "username",
                    localField: options.sender_id ,
                    foreignField: "id",
                    as: "sender"
                }
            }, {
                $project: { ...options.field }
            }

        ])
    }


    const data = await result.toArray()
    // console.log(data,'-09')
    client.close()

    return data
}

//查询 
// async function find(colName, query = {}, options = {}) {
//     const { client, db } = await connect()
//     const collection = db.collection(colName)

//     //传入的_id处理

//     if (query._id && typeof query._id === 'string') {
//         query._id = ObjectId(query._id)
//     }
//     //获取数据库数据
//     const opt = {}
//     if (options.field) {
//         opt.projection = options.field
//     }
//     let result = collection.find(query, opt)

//     //判断是否跳过一些数据
//     if (options.skip) {
//         result = result.skip(options.skip)
//     }
//     //判断获取数据数量
//     if (options.limit) {
//         result = result.limit(options.limit)
//     }
//     //排序
//     if (options.sort) {
//         let key, value
//         //按什么排序
//         key = options.sort[0]
//         //判断排序方式
//         if (options.sort.length > 1) {
//             value = options.sort[1] - 0
//         } else {
//             value = -1
//         }
//         //将排序的值传入赋值给输出的数据
//         result = result.sort({
//             [key]: value
//         })
//     }
//     //数据数量
//     let tal
//     if (options.tal === 'true') {
//         tal = await result.count()
//     }
//     const data = await result.toArray()
//     //关闭数据库
//     client.close()
//     if (tal) {
//         return {
//             data, tal
//         }
//     }
//     return data
// }

module.exports = {
    find,
    insert,
    updata,
    remove,
    findsend
}
