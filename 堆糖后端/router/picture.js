const multer = require('multer')
const path = require('path');
const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo');
const { formatData } = require('../utils/tools')

//配置参数
let storage = multer.diskStorage({
  //下载到那个文件
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images/'))
  },
  //下载的文件名
  filename: async function (req, file, cb) {
    let ext = path.extname(file.originalname);
    let str = file.fieldname + '-' + Date.now() + ext
    cb(null, str)

  }
})
//中间件
const uploadMiddleware = multer({ storage })
//上传多张图片
router.post('/photo', uploadMiddleware.array('photo', 9),async (req, res) => {
  // 中间件会把图片信息格式化到req.file,req.files
  //获取传入的id
  //判断id是_id类型还是id类型
  let { id } = req.body;
  let key = '_id'
  if(id.length !== 24 && Number(id) !== NaN ){
    key = 'id'
    id = id - 0
  }
  // 更新用户信息
  let arr = []
  for (let i = 0; i < req.files.length; i++) {
    let avatarUrl = '/images/' + req.files[i].filename
    arr.push(avatarUrl)
   await mongo.updata('album_details', { [key]: id }, { $set: { [photos[i]]: avatarUrl } })
  }

  res.send(formatData({ data:arr}));
})


//上传单个文件
router.post('/avatar/:id',uploadMiddleware.single('avatar'), async (req,res)=>{
    let {id} = req.params
    // console.log(req.file)
    let key = '_id'
    if(id.length !== 24 && Number(id) !== NaN ){
      key = 'id'
      id = id - 0
    }
    let avatarUrl = '/images/' + req.file.filename
    // console.log(avatarUrl,'000')
    await mongo.updata('username',{[key]:id},{$set:{avatar:avatarUrl}})
    res.send(formatData({data:avatarUrl}))

})


module.exports = router