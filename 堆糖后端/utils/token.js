 //token令牌
const jwt = require('jsonwebtoken')
//密钥
const privateKey = 'xuelin'
//令牌有效时间
function create(data={},expiresIn='2h'){
    const token = jwt.sign({...data},privateKey,{
        expiresIn
    })
    return token
}
//检测令牌状态
function verify(token){
    let result 
    try{
        jwt.verify(token,privateKey)
        result = true
    }catch(err){
        result = false
    }
    return result
}

module.exports = {
    create,
    verify
}