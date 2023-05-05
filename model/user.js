//引入配置文件
const config = require("../config");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

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
    // required: true,
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

  //个人资料
  // 头像
  avatar_url: {
    type: String,
    default:'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  //头图
  banner: {
    type: String,
    default:"../public/banner/top8.jpg"
  },
  // 性别
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
    required: true,
  },
  // 一句话介绍
  slogn: {
    type: String,
    default:"badspider"
  },
  // 居住地
  locations: {
    type: [{ type: String }],
    select: false,
  },
  // 行业
  business: {
    type: String,
    // select: false,
  },
  // 职业经历
  employments: {
    type: [
      {
        company: { type: String },
        job: { type: String },
      },
    ],
    // select: false,
  },
  // 关注与粉丝部分
  following: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // select: false,
  },
  // 话题部分
  followingTopic: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],
    // select: false,
  },

  likingAnswers: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer"
    }],
    select: false
  },
  dislikingAnswers: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer"
    }],
    select: false
  },
  //收藏答案
  collectingAnswers: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer"
    }],
    select: false
  },
});

//封装生成token功能
userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this.id,
    },
    config.secret,
    { expiresIn: "7d" }
  );
};
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
      "string.max": "email 最长为20位",
    }),
    username: Joi.string().min(2).max(20).messages({
      // "any.required": "缺少必选参数 username",
      "string.base": "username 必须是 String 类型的",
      "string.min": "username 最短为2位",
      "string.max": "username 最长为20位",
    }),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{6,16}$/)
      .required()
      .messages({
        "any.required": "缺少必选参数 password",
        "string.min": "password 最短为6位",
        "string.max": "password 最长为16位",
      }),
    _id: Joi.objectId(),
    //个人资料
    avatar_url: Joi.string().messages({
      "string.base": "图像地址必须为String类型",
    }),
    gender: Joi.any().valid("male", "female").default("male").messages({
      "any.only": "传入的值无效",
    }),
    slogn: Joi.string().max(100).messages({
      "string.base": "slogn 必须为String类型",
      "string.max": "slogn 最多为100个字符",
    }),
    locations: Joi.array().items(Joi.string()).messages({
      "array.base": "locations 必须为数组",
      "string.base": "数组中必须为string类型",
    }),
    business: Joi.string().messages({
      "string.base": "business 必须为string类型",
    }),
    employments: Joi.array()
      .items(
        Joi.object().keys({
          company: Joi.string(),
          job: Joi.string(),
        })
      )
      .messages({
        "array.base": "employments 必须为数组类型",
        "object.unknown": "传入的数据有误",
      }),
    // 校验
    following: Joi.array()
      .items(
        Joi.object().keys({
          type: Joi.objectId(),
        })
      )
      .messages({
        "array.base": "following 必须为数组类型",
      }),
    // 校验部分
    followingTopic: Joi.array()
      .items(
        Joi.object().keys({
          type: Joi.objectId(),
        })
      )
      .messages({
        "array.base": "followingTopic 必须为数组类型",
        "string.pattern.name": "必须为 objectId 类型",
      }),
  });

  return schema.validate(data);
}

//导出
module.exports = {
  User,
  userValidator,
};
