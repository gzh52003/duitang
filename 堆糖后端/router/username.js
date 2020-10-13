const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const { formatData, $md5 } = require('../utils/tools')
//验证码
const smsCode = require('./smscode')
const svgCaptcha = require('svg-captcha')

/*{
            actived_at: 0,
            category: 0,
            count: 0,
            covers: ["/img/defalut_album.jpg"],
            favorite_count: 0,
            favorite_id: 0,
            id: 0,
            like_count: 0,
            name: "默认专辑",
            status: 0,
            tags: [],
            visit_count: 0
        }*/
//添加用户
router.post('/', async (req, res) => {
    const $id = Math.round(Math.random() * (Date.now() / 1000))
    let {
        username,
        email,
        avatar = '/img/defalut.png',
        cover = "/img/background.jpg",
        id,
        identity = ['normal'],
        is_certify_user = 'false',
        password,
        phone,
        collection = [],
        like = [],
        follow = [],
        synopsis,
        gender = '保密',
        region,
        birthday,
        album = [{
            actived_at: 0,//建立时间
            category: 0,//分类
            count: 0,//计数
            covers: ["/img/defalut_album.jpg"],//封面图片
            favorite_count: 0,//收藏计数
            favorite_id: [],
            id: $id,
            like_count: 0,//赞
            name: "默认专辑",//专辑名称
            status: 0,
            tags: [],
            visit_count: 0
        }],
        is_disable = false,
        is_disable_time = 0
    } = req.body
    password = $md5(password)
    try {
        await mongo.insert('username', {
            username,
            email,
            password,
            phone,
            avatar,
            cover,
            id,
            identity,
            is_certify_user,
            collection,
            like,
            follow,
            synopsis,
            gender,
            region,
            birthday,
            album,
            is_disable,
            is_disable_time,
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }

})
/*
username:用户名 必填
email:邮箱 
password:密码  必填
phone:手机号 必填
avatar：头像地址 需要调用另外接口写入，不设置为默认头像
cover：头像背景图，需要调用另外接口写入，不设置为默认值
id:用户id
identity:身份
is_certify:是否认证用户
collection:收藏
like:喜欢
follow：关注
synopsis：简介
gender:性别
region：地区
birthday：生日 
album:专辑信息 默认一个默认专辑
is_disable:false 是否禁用
*/

//用户信息修改
router.put('/user:id', async (req, res) => {
    const obj = { id, username, synopsis, gender, region, birthday } = req.body
    let result
    let ziduan = '_id'

    if (id.length !== 24 && Number(id) === (id - 0)) {
        ziduan = 'id'
    }
    switch (true) {
        case username:
            result = await mongo.updata('username', { [ziduan]: $id }, { username })
            break
        case synopsis:
            result = await mongo.updata('username', { [ziduan]: $id }, { synopsis })
            break
        case gender:
            result = await mongo.updata('username', { [ziduan]: $id }, { gender })
            break
        case region:
            result = await mongo.updata('username', { [ziduan]: $id }, { region })
            break
        case birthday:
            result = await mongo.updata('username', { [ziduan]: $id }, { birthday })
            break
        default:
            res.send(formatData({ status: 400 }))
            return
    }
    res.send(formatData({ data: obj }))
    // if(username){
    //     mongo.updata()
    // }else if(synopsis){

    // }else if(gender){

    // }else if(region){

    // }else if(birthday){

    // }else{
    //     res.send(formatData({status:400}))
    // }

})

//查询单个用户

//传入id
router.get('single/:id', async (req, res) => {
    const { id } = req.params
    let ziduan = '_id'

    if (id.length !== 24 && Number(id) === (id - 0)) {
        ziduan = 'id'
    }
    // console.log($id)
    //我自己操作存入的数据可能id为空
    //但是_id肯定不会为空，所以，如果id查找不到再_id查询一次
    // let result = await mongo.find('username', { [ziduan]: $id }, { field: { password: false } })
    // if (result.length > 0) {
    //     res.send(formatData({ data: result }))
    // } else {

    //     try {
    //         result = await mongo.find('username', { _id: $id }, { field: { password: false } })
    //         res.send(formatData({ data: result }))
    //     } catch (err) {
    //         res.send(formatData({ status: 400 }))
    //     }
    // }
    try {
        result = await mongo.find('username', { [ziduan]: $id }, { field: { password: false } })
        res.send(formatData({ data: result }))
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
    if (result.length > 0) {
        res.send(formatData({ data: result }))
    } else {
        res.send(formatData({ status: 400 }))
    }
})
//登录验证，可通过手机号、邮箱、用户名、查询
router.post('/login', async (req, res) => {
    const email = /^\\s\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$/
    let result
    const { username, password } = req.body
    if (/^1[3456789]\d{9}/.test(username)) {
        result = await mongo.find('username', { phone: username, password }, { field: { password: false } })
    } else if (email.test(username)) {
        result = await mongo.find('username', { email: username, password }, { field: { password: false } })
    } else {
        result = await mongo.find('username', { username, password }, { field: { password: false } })
    }
    if (result.length > 0) {
        res.send(formatData({ data: result }))
    } else {
        res.send(formatData({ status: 400 }))
    }
})

//短信验证码
router.get('/smsCode/:PhoneNumbers', (req, res) => {
    const { PhoneNumbers } = req.params
    // console.log(PhoneNumbers)
    smsCode(res, PhoneNumbers)
})
// console.log('你好世界')
//图形验证码
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

//图形验证码验证
router.post('/vscodeVerification', (req, res) => {
    const { vscode, phone } = req.body
    if (vscode !== req.session.vcode) {
        res.send(formatData({ status: 400 }))
        return
    }
    smsCode(res, phone)
    res.send(formatData())
})
//短信验证码验证
router.post('/smscodeVerification', async (req, res) => {
    const { smscode, phone } = req.body
    if (smscode !== req.session.smscode) {
        res.send(formatData({ status: 403 }))
        return
    }
    const result = await mongo.find('username', { phone }, { field: { password: false } })
    if (result.length > 0) {
        res.send(formatData({ data: result }))
    } else {
        res.send(formatData({ status: 401 }))
    }
})

//用户名是否重名
router.get('/identical', async (req, res) => {
    const { username } = req.query
    const result = await mongo.find('username', { username })
    if (result.length > 0) {
        res.send(formatData({ status: 400, code: '用户名占用' }))
    } else {
        res.send(formatData())
    }
})
//创建专辑
router.get('/album', async (req, res) => {
    const { name, id } = req.query
    let key = '_id'
    if (id.length !== 24 && Number(id) === (id - 0)) {
        key = 'id'
        id = id - 0
    }
    const $id = Math.round(Math.random() * (Date.now() / 1000))
    const obj = {
        actived_at: 0,//建立时间
        category: 0,//分类
        count: 0,//计数
        covers: ["/img/defalut_album.jpg"],//封面图片
        favorite_count: 0,//收藏计数
        favorite_id: [],
        id: $id,
        like_count: 0,//赞
        name: name,//专辑名称
        status: 0,
        tags: [],
        visit_count: 0
    }
    try {
        const result = await mongo.updata('username', { [key]: id }, { $addToSet: { album: { ...obj } } })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})

//删除专辑
router.get('/removeAlbum', async (req, res) => {
    let { id } = req.query
    let { albumId } = req.query
    albumId = albumId - 0
    let key = '_id'
    if (id.length !== 24 && Number(id) === (id - 0)) {
        key = 'id'
        id = id - 0
    }

    try {
        await mongo.updata('username', { [key]: id }, { $pull: { album: { id: albumId } } })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})


//修改专辑
// router.get('/updataAlbum', async (req, res) => {
//     let { id } = req.query
//     let { albumId } = req.query
//     albumId = albumId - 0
//     let key = '_id'
//     if (id.length !== 24 && Number(id) === (id - 0)) {
//         key = 'id'
//         id = id - 0
//     }

//     try {
//         await mongo.updata('username', { [key]: id }, { $pull: { album: { id: albumId } } })
//         res.send(formatData())
//     } catch (err) {
//         res.send(formatData({ status: 400 }))
//     }
// })
//加入/取消收藏
router.get('/collection', async (req, res) => {
    let { id, tieziId, operation } = req.query
    let key = '_id'
    if (id.length !== 24 && Number(id) === (id - 0)) {
        key = 'id'
        id -= 0
    }
    try {
        if (operation === 'add') {

            await mongo.updata('username', { [key]: id }, { $addToSet: { collection: { tieziId } } })
        } else if (operation === 'del') {
            await mongo.updata('username', { [key]: id }, { $pull: { collection: { tieziId } } })
        }
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})

//加入/取消关注
router.get('/follow', async (req, res) => {
    let { id, userId, operation } = req.query
    let key = '_id'
    if (id.length !== 24 && Number(id) === (id - 0)) {
        key = 'id'
        id -= 0
    }
    try {
        if (operation === 'add') {

            await mongo.updata('username', { [key]: id }, { $addToSet: { follow: { userId } } })
        } else if (operation === 'del') {
            await mongo.updata('username', { [key]: id }, { $pull: { follow: { userId } } })
        }
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})
//批量获取
router.get('/batch',async (req,res)=>{
    let {page=1,size=5,sort="a",tal='true',is} = req.query
    const limit = size - 0
    const skip = (page - 0) * size
    sort = sort.split()
    if(is === 'true'){
        is = true
    }else{
        is = false
    }
    try{
        let result = await mongo.find('username',{is_disable:is},{skip,limit,sort,tal,field:{password:false}})
        res.send(formatData({data:result}))
    }catch(err){
        console.log(err)
        res.send(formatData({status:400}))
    }
})
//模糊搜索
router.get('/search',async (req,res)=>{
    let {page=1,size=5,sort="a",tal='true',key='username',kw} = req.query
    const limit = size - 0
    const skip = (page - 0) * size
    sort = sort.split()
    // if(key === 'id'){
    //     kw -= 0
    // }
    try{
        const {tal:total,data} = await mongo.find('username',{[key]:{$regex:kw}},{limit,skip,tal,sort,field:{password:false}})
        res.send(formatData({total,data}))
    }catch(err){
        console.log(err)
        res.send(formatData({status:400}))
    }
})
//禁用用户
router.get('/disable',async (req,res)=>{
    let {id,operation,disable_time} = req.query
    let key = '_id'
    if(id.length !== 24 && Number(id) === (id - 0)){
        key = 'id'
        id -= 0
    }
    if(operation === 'true'){
        await mongo.updata('username',{[key]:id},{$set:{is_disable:true,is_disable_time:disable_time}})
        
    }else if(operation === 'false'){
        await mongo.updata('username',{[key]:id},{$set:{is_disable:false,is_disable_time:0}})
    }else{
        res.send(formatData({status:400}))
    }
    res.send(formatData())
})
module.exports = router
