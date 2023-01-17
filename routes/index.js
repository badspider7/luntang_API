const router = require('express').Router()

//用户路由
router.use('/user',require('./user'))

//上传路由
router.use('/upload',require('./upload'))

module.exports = router