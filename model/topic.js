const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);

const topicSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  // 话题的名称
  name: {
    type: String,
    required: true,
  },
  // 图像
  avatar_url: {
    type: String
  },
  // 简介
  introduction: {
    type: String,
    select: false,
    maxlength: 300
  }
})

// 创建 Model
const Topic = mongoose.model("Topic", topicSchema)

//进行校验
function topicValidator(data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    avatar_url: Joi.string(),
    introduction: Joi.string().max(300)
  })
  return schema.validate(data)
}

module.exports = {
  Topic,
  topicValidator
}