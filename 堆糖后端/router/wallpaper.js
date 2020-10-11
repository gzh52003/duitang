const express = require('express')
const mongo = require('../utils/mongo')
const router = express.Router()

const {formatData} = require('../utils/tools')

router.get('/',async (req,res)=>{
    const {page,size,tal="true"} = req.query

    const limit = size - 0
    const skip = (page - 1) * size
    // sort = sort.split(',')

    try{
        const {data,tal:total} = await mongo.find('wallpaper',{},{limit,skip,tal})
        res.send(formatData({data,total}))
    }catch(err){
        res.send(formatData({status:417}))
    }

})

router.put('/',async (req,res)=>{
    let obj = {
        add_datetime:new Date().toLocaleString(),
        add_datetime_pretty:'',
        add_datetime_ts:Date.now(),
        album:{},
        buyable:'',
        copyright_author_name:'',
        copyright_dt_user_id:'',
        event_count:'',
        extra_links:[],
        extra_type:'',
        favorite_count:'',
        has_copyright:'',
        has_favorited:'',
        icon_description:'',
        icon_url:'',
        id:'',
        instant_tags:[],
        is_certify_user:'',
        is_root:'',
        like_count:'',
        like_id:'',
        msg:'',
        next_id:'',
        photo:{},
        prev_id:'',
        related_albums:[],
        reply_count:'',
        root_album:{},
        root_blog_id:'',
        sender:{},
        sender_id:'',
        shareLinks_2:{},
        share_links_2:{},
        tags:[]

    }
    obj = Object.assign(obj,req.body)
    console.log(obj)
  try{
    const result = await mongo.insert('wallpaper',obj)
    res.send(formatData({data:result}))
  }catch(err){
      res.send(formatData({status:400}))
  }
})
module.exports = router
