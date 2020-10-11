const express = require('express')
const router = express.Router()
const session = require('express-session')

//跨域允许
const {cors} = require('../filter/cors')
const wallpaper = require('./wallpaper')
const username = require('./username')
const picture = require('./picture')
const admin = require('./admin')
const list = require('./album_details')
const comment = require('./comment')
//允许跨域
router.use(cors)
//post请求格式化中间件
router.use(express.urlencoded({extended:true}),express.json())
// router.use(express.urlencoded({extended:false}),express.json())
router.use(session({
    secret: 'laoxie',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        // 设置cookie有效期
        maxAge: 1000*60*60*2
    }
}))

router.use('/wallpaper',wallpaper)
router.use('/user',username)
router.use('/picture',picture)
router.use('/admin',admin)
router.use('/list',list)
router.use('/comment',comment)
module.exports = router