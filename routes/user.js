const router = require('express').Router()
const { userValidator } = require('../model/user')
const validator = require('../middleware/validate')
const userController = require('../controller/user')
const auth = require('../middleware/auth')

//用户注册
router.post('/', validator(userValidator),userController.register)

//用户登录
router.post('/login', validator(userValidator),userController.login)

//获取指定用户
router.get('/:id', userController.getUser)

//获取所有用户
router.get('/', userController.getUserList)


//修改用户信息
router.put('/:id',[auth,validator(userValidator)], userController.updateUser)


//删除用户
router.delete('/:id',[auth,validator(userValidator)],userController.deleteUser)


module.exports = router
