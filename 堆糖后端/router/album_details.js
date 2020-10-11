const { request } = require('express')
const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const { formatData } = require('../utils/tools')

router.post('/', async (req, res) => {
    const $id = Math.round(Math.random() * (Date.now() / 100))
    const {
        album= {},
        photo=
        {
            width: '',
            height: '',
            path: '',
            size: ''
        },
        msg,
        id=$id,
        buyable= 0,
        tags=
            [],
        shareLinks_2=
        {
            qq,
            weixin,
            system,
            weixinpengyouquan,
            weibo,
            common,
            qzone
    
        },
        is_root=0,
        has_favorited=0,
        reply_count=0,
        add_datetime=new Date().toLocaleString(),
        add_datetime_pretty='',
        add_datetime_ts=Date.now(),
        icon_url='',
        sender_id,
        like_id=0,
        prev_id,
        next_id,
        like_count=0,
        favorite_count=0,
        event_count=0,
        extra_type='PICTURE',
        share_links_2:
        {
            qq,
            weixin,
            system,
            weixinpengyouquan,
            weibo,
            common,
            qzone
        },
        related_albums:
            [],
        extra_links=[],
        icon_description= '',
        root_album=
        {
            id,
            name,
            count,
            category,
            covers: [],
            tags: [],
            status: 0,
            like_count: 0,
            actived_at: 0,
            favorite_count: 0,
            favorite_id: 0,
            visit_count: 0
        },
        root_blog_id,
        instant_tags= [],
        is_certify_user= false,
        has_copyright= false,
        copyright_author_name= '',
        copyright_dt_user_id= 0
    } = req.body

    try{
        await mongo.insert('album_details',{
            album,
            photo,
            msg,
            id,
            buyable,
            tags,
            shareLinks_2,
            is_root,
            has_favorited,
            reply_count,
            add_datetime,
            add_datetime_pretty,
            add_datetime_ts,
            icon_url,
            sender_id,
            like_id,
            prev_id,
            next_id,
            like_count,
            favorite_count,
            event_count,
            extra_type,
            share_links_2,
            related_albums,
            extra_links,
            icon_description,
            root_album,
            root_blog_id,
            instant_tags,
            is_certify_user,
            has_copyright,
            copyright_author_name,
            copyright_dt_user_id
            })
            res.send(formatData())
    }catch(err){
        res.send(formatData({status:400}))
    }
})

//获取数据
router.get('/by_search',async (req,res)=>{
    let {page=1,size=5,sort="a",tal='true'} = req.query
    const limit = size - 0
    const skip = (page - 1) * size
    sort = sort.split(',')
    const sender_id = 'sender_id'
    // console.log(sender_id)
   
    
    let data = await mongo.findsend('album_details',{},{limit,skip,sort,tal,field:{
        album:true,
        photo:true,
        msg:true,
        id:true,
        buyable:true,
        tags:true,
        reply_count:true,
        add_datetime:true,
        add_datetime_pretty:true,
        add_datetime_ts:true,
        sender_id:true,
        like_count:true,
        favorite_count:true,
        extra_type:true,
        is_certify_user:true,
        // 'sender.password':false,
        sender:true
    },sender_id})
    // console.log(data,res)
    res.send(formatData({data}))
   
})


//获取单个数据
router.get('/single/:id',async (req,res)=>{
    let{id} = req.params
    let key= '_id'
    const sender_id = 'sender_id'
    const single = true
    if(id.length !== 24 && Number(id) === (id - 0)){
        key = 'id'
        id = id - 0
    }
    const result = await mongo.findsend('album_details',{[key]:id},{sender_id,single})
    res.send(formatData({data:result}))
})

//获取数据模糊搜索
router.get('/search',async (req,res)=>{
    let {page=1,size=5,sort="a",tal='true',kw,key="msg"} = req.query
    const limit = size - 0
    const skip = (page - 1) * size
    sort = sort.split()
    const sender_id = 'sender_id'
    // console.log(sender_id)
    
    let data = await mongo.findsend('album_details',{[key]:{$regex:kw}},{limit,skip,sort,tal,field:{
        album:true,
        photo:true,
        msg:true,
        id:true,
        buyable:true,
        tags:true,
        reply_count:true,
        add_datetime:true,
        add_datetime_pretty:true,
        add_datetime_ts:true,
        sender_id:true,
        like_count:true,
        favorite_count:true,
        extra_type:true,
        is_certify_user:true,
        // 'sender.password':false,
        sender:true
    },sender_id})
    // console.log(data,res)
    res.send(formatData({data}))
   
})
//点赞

router.get('/zan',async (req,res)=>{
    const {id,operation} = req.query

    // console.log('你好',operation)
    if(operation === 'add'){
    //   let res = await mongo.find('commect',{id})
        await mongo.updata('album_details',{_id:id},{$inc:{favorite_count:1}})
    }else if(operation === 'del'){
        await mongo.updata('album_details',{_id:id},{$inc:{favorite_count:-1}})
    }else{
        res.send(formatData({status:400}))
    }
    res.send(formatData())
    
})

//

module.exports = router

// album,
// photo
// msg,
// id,
// buyable,
// tags,
// shareLinks_2,
// is_root,
// has_favorited,
// reply_count,
// add_datetime,
// add_datetime_pretty,
// add_datetime_ts,
// icon_url,
// sender_id,
// like_id,
// prev_id,
// next_id,
// like_count,
// favorite_count,
// event_count,
// extra_type,
// share_links_2,
// related_albums,
// extra_links,
// icon_description,
// root_album,
// root_blog_id,
// instant_tags,
// is_certify_user,
// has_copyright,
// copyright_author_name,
// copyright_dt_user_id
