const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);

const queationSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  questioner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false
  },

  topics: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Topic"
    }],
    select:false
  }
})

// 创建 Model
const Question = mongoose.model("Question", queationSchema)

function questionValidator(data) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    questioner: Joi.objectId(),
    topics: Joi.array().items(Joi.objectId())
  })
  return schema.validate(data)
}

module.exports = {
  Question,
  questionValidator
}