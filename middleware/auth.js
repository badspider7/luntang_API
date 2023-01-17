//鉴权中间件
const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req,res,next) => {
    //前端在请求接口的时候需要在header上携带上我们后端生成的token

    //1.保存token
    const token = req.header("authorization")
    //2.判断token是否存在
    if (!token) {
        return res.status(400).json({
            code: 400,
            msg:"token 信息不存在"
        })
    }
    //3.如果存在，检验是否有校
    try {
        const userData = jwt.verify(token, config.secret)
        req.userData = userData
        next()
    } catch (err) {
        return res.status(401).json({
            code: 401,
            msg:"token 无效"
        })
    }
}