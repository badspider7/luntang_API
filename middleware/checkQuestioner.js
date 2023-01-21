const { Question } = require('../model/questions')

module.exports =async (req, res, next) => {
    const question = await Question.findById(req.params.id).select("+questioner")
    if (question.questioner.toString() !== req.userData._id) {
        return res.status(400).json({
            code: 400,
            msg:"没有权限"
        })
    }
    next()
}