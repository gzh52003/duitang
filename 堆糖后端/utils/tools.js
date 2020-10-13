const crypto = require('crypto')
//响应内容模板
function formatData(options){
    let obj = {
        msg:'success',
        status:200,
        data:[]

    }
    obj = Object.assign(obj,options)
    // if(obj.status === 400){
    //     obj.msg = 'fail'
    // }
    switch(obj.status){
        case 400:
            obj.msg = 'fail'
            break
        case 401:
            obj.msg = 'not_log_in'
            break
        case 403:
            obj.msg = 'no_permission'
            break 
        case 417:
            obj.mag = 'unsatisfied'
            break 
        case 500:
            obj.msg = 'server_error'
            break
    }
    return obj

}
//md5加密
function $md5(data,privateKey="xuelin"){
    let hash = crypto.createHash('md5')
    let result =  hash.update(data+privateKey).digest('hex')
   
    return result
}

module.exports = {
    formatData,
    $md5

}