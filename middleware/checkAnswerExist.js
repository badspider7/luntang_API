const { Answer } = require("../model/answers")
 
module.exports = async (req, res, next) => {
  const answers = await Answer.findById(req.params.id).select("+answerer");
  if(!answers) return res.status(404).json({
    code: 404,
    msg: "答案不存在"
  })
  if(answers.questionId !== req.params.questionId) {
    return res.status(404).json({
      code: 404,
      msg: "该问题下没有此答案"
    })
  }
   next()
}