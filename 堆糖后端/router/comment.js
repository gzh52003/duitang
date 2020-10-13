const express = require('express')
const mongo = require('../utils/mongo')
const router = express.Router()
const {formatData} = require('../utils/tools')
//增加新评论
router.get('/add',async (req,res)=>{
    let {send_id,text,tieziId,} = req.query
    sender_id-=0
    const time = new Date().toLocaleString()
    const zan = 0
    const children=[]
    const is_violations = false
    // const id = Math.round(Math.random() *( Date.now() / 100)) 
    const id = Math.round(Math.random() * (Date.now() / 100)) +''
    await mongo.insert('comment',{send_id,text,time,zan,children,tieziId,is_violations,id})
    res.send(formatData())
    /* 
    send_id：评论人的id
    text:评论人的文字
    time:时间
    zan：评论的赞
    children:回复评论
    tieziId：帖子的Id
    is_violations:是否违规
    */
})
//评论删除
router.get('/del/:id',async (req,res)=>{
    const {id} = req.params
    try{

        await mongo.remove('comment',{_id:id},)
        res.send(formatData())
    }catch(err){
        res.send(formatData({status:400}))
    }
})

//评论点赞
router.get('/zan',async (req,res)=>{
    const {id,operation} = req.query

    // console.log('你好',operation)
    if(operation === 'add'){
    //   let res = await mongo.find('commect',{id})
        await mongo.updata('comment',{_id:id},{$inc:{zan:1}})
    }else if(operation === 'del'){
        await mongo.updata('comment',{_id:id},{$inc:{zan:-1}})
    }
    res.send(formatData())
    
})

//回复子评论
router.get('/children',async (req,res)=>{
    const {userId,other_party,text} = req.query
    const time = new Date().toLocaleString()
    try{

        await mongo.updata('commect',{_id:id},{$push:{data:{other_party,text,userId,time}}})
        res.send(formatData)
    }catch(err){
        res.send(formatData({status:400}))
    }
})

//查询评论
router.get('/pinglun',async (req,res)=>{
    let {size="5",page="1",sort="a",id} = req.query
    const limit = size - 0
    const skip = (page - 1) * size
    sort = sort.split(',')
    const sender_id = 'send_id'
    const single = true
    // console.log('skip',skip)
    try{

        const result = await mongo.findsend('comment',{id},{sort,limit,sender_id,skip,field:{'sender.password':false}})
        res.send(formatData({data:result}))
    }catch(err){
        console.log(err)
        res.send(formatData({status:400}))
    }
})

//举报评论
router.get('/violations',async (req,res)=>{
    let {operation,id} = req.query
    if(operation === 'is'){

        await mongo.updata('comment',{id},{$set:{is_violations:true}})
    }else if(operation === 'no'){
        await mongo.updata('comment',{id},{$set:{is_violations:false}})
    }else{
        res.send(formatData({status:400}))
    }
    res.send(formatData())
})

module.exports = router


/* 
发现发布内容、收藏发布帖子，
发布文章，图片电影

专辑点赞，收藏人数


*/