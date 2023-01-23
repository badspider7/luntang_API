const { Comment } = require("../model/comments")
 
module.exports = async (req, res, next) => {
  const comments = await Comment.findById(req.params.id).select("+commentator");
  if(!comments) return res.status(404).json({
    code: 404,
    msg: "评论不存在"
  })
  if(req.params.questionId && comments.questionId !== req.params.questionId) {
    return res.status(404).json({
      code: 404,
      msg: "该问题下没有此评论"
    })
  }
  if(req.params.answerId && comments.answerId !== req.params.answerId) {
    return res.status(404).json({
      code: 404,
      msg: "该答案下没有此评论"
    })
  }
   next()
}