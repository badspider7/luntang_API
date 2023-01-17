//引入配置文件
const config = require('../config')
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

//定义 User 的结构
const userSchema = new mongoose.Schema({
  //邮箱
  email: {
    type: String,
    required: true,
    unique: true,
  },
  //用户名
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  //密码
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  //隐藏字段
  __v: {
    type: Number,
    select: false,
  },
});

//封装生成token功能
userSchema.methods.generateToken = function () {
  return jwt.sign({
    _id:this.id
  },
    config.secret,
    {expiresIn:'7d'}
  )
}
// console.log(userSchema);


//创建model
const User = mongoose.model("User", userSchema);

//创建内容校验规则对象
function userValidator(data) {
    const schema = Joi.object({
        email: Joi.string().email().trim().min(6).max(20).required().messages({
            "any.required": "缺少必选参数 email",
            "string.email": "email 必须是 String 类型的",
            "string.min": "email 最短为6位",
            "string.max":"email 最长为20位"
        }),
        username: Joi.string().min(2).max(20).required().messages({
            "any.required": "缺少必选参数 username",
            "string.base": "username 必须是 String 类型的",
            "string.min": "username 最短为2位",
            "string.max":"username 最长为20位"
        }),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,16}$/).required().messages({
            "any.required": "缺少必选参数 password",
            "string.min": "password 最短为6位",
            "string.max":"password 最长为16位"
        }),
        _id: Joi.objectId()

    })

    return schema.validate(data)
}

//导出
module.exports = {
    User,
    userValidator
};
