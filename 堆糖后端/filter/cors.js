const token = require('../utils/token')
const allow_origin = ['http://localhost:8080', 'http://10.3.138.24:3000', 'http://120.24.63.27:2006','http://localhost:3000','http://localhost:3001']

function cors(req, res, next) {
    const Authorization = req.Authorization
    // console.log(Authorization)
    console.log(req.headers.origin)

    // if(!token.verify(Authorization)){
    //     res.send(401)
    // }
    const origin = req.get('origin')
    
    if (allow_origin.includes(origin)) {
        res.set({
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
            "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Credentials": true,
        })
        if (req.method === "OPTIONS") {
            res.sendStatus(200)
        } else {
            next()
        }
    } else {
        // res.send(401);
        next()
    }
}

module.exports = {cors}