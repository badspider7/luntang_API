const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);

const answerSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  content: {
    type: String,
    required: true
  },
  answerer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false
  },
  questionId: {
    type: String,
  },
  voteCount: {
    type: Number,
    default: 0,
    required: true
  }
})

// 创建 Model
const Answer = mongoose.model("Answer", answerSchema)

function answerValidator(data) {
  const schema = Joi.object({
    content: Joi.string().required(),
    answer: Joi.objectId(),
    questionId: Joi.string(),
    voteCount: Joi.number()
  })
  return schema.validate(data)
}

module.exports = {
  Answer,
  answerValidator
}