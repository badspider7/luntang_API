const { Answer } = require("../model/answers")

module.exports = async (req, res, next) => {
  const answer = await Answer.findById(req.params.id).select('+answerer');
  if(answer.answerer.toString() !== req.userData._id) {
    return res.status(400).json({
      code: 400,
      msg: "没有权限"
    })
  }
   next()
}