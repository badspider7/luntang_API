const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);

const commentSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  content: {
    type: String,
    required: true
  },
  commentator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false
  },
  questionId: {
    type: String,
  },
  answerId: {
    type: String
  },

  // 一级与二级评论
  rootCommentId: {
    type: String
  },
  replyTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{timestamps: true})

// 创建 Model
const Comment = mongoose.model("Comment", commentSchema)

function commentValidator(data) {
  const schema = Joi.object({
    content: Joi.string().required(),
    commentator: Joi.objectId(),
    questionId: Joi.string(),
    answerId: Joi.string(),

    // 校验 
    rootCommentId: Joi.string(),
    replyTo: Joi.objectId()
  })
  return schema.validate(data)
}

module.exports = {
  Comment,
  commentValidator
}