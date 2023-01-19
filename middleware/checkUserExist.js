const {User} = require('../model/user')

module.exports =async (req, res, next) => {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({
        code: 404,
        msg: "用户不存在"
    })
    next()
}