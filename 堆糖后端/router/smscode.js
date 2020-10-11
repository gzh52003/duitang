const Core = require('@alicloud/pop-core')
const { request } = require('express')
const {formatData} = require('../utils/tools')
let smsCode = (res, mobile) => {
    console.log(mobile, '你好')
    let client = new Core({
        accessKeyId: 'LTAI4G2vNjhrGTESjtA9axB6',//阿里云短信服务keyID
        accessKeySecret: 'QFNGnTnhvR5P1GDMZFz9ahFPm6zWwm',//阿里短信服务keySecret
        endpoint: 'http://dysmsapi.aliyuncs.com',//阿里网址
        apiVersion: '2017-05-25'
    })
    let num = ''
    for (let i = 0; i < 6; i++) {
        let n = Math.floor(Math.random() * 10)
        num += n === 0 ? '0' : n
    }
    // //判断，如果得到的是0，加等于一个字符串0

    let params = {
        "RegionId": "cn-hangzhou",
        "PhoneNumbers": mobile,//电话号码
        "SignName": 'ugoshop',//短信签名
        "TemplateCode": "SMS_201715882",//短信模板
        "TemplateParam": `{"code":${num}}`,//短信模板变量对应值

    }
    const requestOption = {
        method: 'POST'
    }
    client.request('SendSms', params, requestOption).then((result) => {
        req.session.smscode = num
        res.send(formatData())
    }, (ex) => {
        res.send(ex)
    })


    
}

module.exports = smsCode
