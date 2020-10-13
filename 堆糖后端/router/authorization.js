const express = require('express')
const router = express.Router()
const {formatData} = require('../utils/tools')
const token = require('../utils/token')

router.get('/',(req,res)=>{
    const {authorization} = req.params
    if(token.verify(authorization)){
        res.send(formatData())
    }else{
        res.send(formatData({status:400}))
    }

})
module.exports = router