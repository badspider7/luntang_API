const { Topic } = require("../model/topic")

module.exports = async (req, res, next) => {
    const topic = await Topic.findById(req.params.id)
    if (!topic) {
        return res.status(404).json({
            code: 404,
            msg:"话题不存在"
        })
    }
    next()
}