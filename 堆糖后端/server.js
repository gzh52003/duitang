const express = require('express')
const app = express()

const allRouter = require('./router')

app.use('/api',allRouter)
app.listen(2006,()=>{
    console.log('开启服务器端口2006')
})