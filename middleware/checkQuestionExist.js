const { Question } = require('../model/questions')

module.exports = async (req, res, next) => {
    console.log('检查问题是否存在:',req.params.id);
    const questions = await Question.findById(req.params.id).select("+questioner")
    if (!questions) return res.status(404).json({
        code: 404,
        msg:"问题不存在"
    })
    next()
}