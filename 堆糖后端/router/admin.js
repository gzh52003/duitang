const express = require('express')
const mongo = require('../utils/mongo')
const router = express.Router()
const {formatData ,$md5} = require('../utils/tools')
const token = require('../utils/token')
const svgCaptcha = require('svg-captcha')
//添加
router.post('/',async (req,res)=>{
    let {username,password,gender,age,avatar="/default.png",authority,phone,email,time=new Date().toLocaleString()} = req.body
    password = $md5(password)
    try{
        const result = await mongo.insert('admin',{username,password,gender,age,avatar,authority,phone,email,time})
        res.send(formatData({data:result}))
    }catch(err){
        res.send(formatData({status:400}))
    }
})

//查询
router.get('/',async (req,res)=>{
    let {page=1,size=5,sort="a",tal='true'} = req.query
    const skip = (page-1)*size
    const limit = size - 0
    sort = sort.split(',')
    let {tal:total,data} = await mongo.find('admin',{},{skip,limit,tal,sort, field: { password: false } },)
    res.send(formatData({total,data}))
})

//查询单个
router.get('/single/:id',async (req,res)=>{
    let {id} = req.params
    let key = '_id'
    if(id.length !== 24 && Number(id) === (id - 0)){
        key = 'id'
        id =  id  - 0
    }
    // console.log(Number(id) === id)
    try{
        const result = await mongo.find('admin',{[key]:id}, { field: { password: false } })
        if(result.length > 0){

            res.send(formatData({data:result}))
        }else{
            res.send(formatData({status:401,code:'未注册'}))
        }
    }catch(err){
         res.send(formatData({status:403}))
    }
  
})

//登录验证
router.post('/login', async (req,res)=>{
    let {username,password,vscode} = req.body
    if(vscode !== req.session.vcode){
        res.send(formatData({status:400}))
        return
    }
    password = $md5(password)
   let result = await mongo.find('admin',{username,password},{field:{password:false}})
    if(result.length > 0){
        result = result[0]
        let authorzation = token.create(username)
        result.authorzation = authorzation
        res.send(formatData({data:result}))
    }else{
        res.send(formatData({status:403}))
    }
})

//修改
 router.put('/updata/:id',async (req,res)=>{
     const obj = {username,password,gender,age,avatar,authority,phone,email} = req.body
     const {id} = req.params
     let key = '_id'
     if(id.length !== 24 && Number(id) === (id - 0)){
         key = 'id'
         id -= 0
     }
     try{
        const result = await mongo.updata('admin',{[key]:id},{$set:{...obj}})

        res.send(formatData({data:obj}))
     }catch(err){
         res.send(formatData({status:400}))
     }
 })

 router.delete('/:id',async (req,res)=>{
     const {id} = req.params
     let key = '_id'
    if(id.length !== 24 && Number(id) === (NaN - 0)){
        key = 'id'
        id -= 0
    }
    try{
        await mongo.remove('admin',{[key]:id})
        res.send(formatData())
    }catch(err){
        res.send(formatData({status:400}))
    }
 })

 //模糊搜索
 router.get('/search',async (req,res)=>{
     let {q,page=1,size=5,key='username',sort="a",tal='true'} = req.query
    const skip = (page - 1) *size
    const limit = size - 0
   sort = sort.split(',')
    try{
        const {tal:total,data} = await mongo.find('admin',{[key]:{$regex:q}},{skip,limit,tal,sort,field:{password:false}})
        res.send(formatData({total,data}))
    }catch(err){
        res.send(formatData({status:400}))
    }
 })

 //查询是否重名
    router.get('/identical',async (req,res)=>{
        const {username} = req.query

        const result = await mongo.find('admin',{username})
        if(result.length > 0){
            res.send(formatData({code:'用户名占用',status:400}))
        }else{
            res.send(formatData({}))
        }
    })

    router.get('/vscode', (req, res) => {
        // console.log('0000')
        const options = {
            // size: 10,
            noise: 3,
            ignoreChars: '0o1il',
            background: '#58bc58',
            color: true,
            fontSize: 50,
            height: 54
        }
    
        // 验证码在这里生成
        const captcha = svgCaptcha.create(options);// {data:'<svg/>',text:'abcd'}
    
        //    console.log('vcode.session=',req.session);
        // 把验证码存入会话Session
        req.session.vcode = captcha.text.toLowerCase();
        res.send(formatData({ data: captcha.data }));
    })
module.exports = router