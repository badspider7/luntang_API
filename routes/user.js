const router = require('express').Router()
const { userValidator } = require('../model/user')
const validator = require('../middleware/validate')
const userController = require('../controller/user')
const auth = require('../middleware/auth')
const checkUserExist = require('../middleware/checkUserExist')
const checkTopicExist = require('../middleware/checkTopicExist')

//用户注册
router.post('/', validator(userValidator),userController.register)

//用户登录
router.post('/login', validator(userValidator),userController.login)

//获取指定用户
router.get('/:id', userController.getUser)

//获取所有用户
router.get('/', userController.getUserList)


//修改用户信息
router.patch('/:id',[auth,validator(userValidator)], userController.updateUser)


//删除用户
router.delete('/:id',[auth,validator(userValidator)],userController.deleteUser)


//获取关注列表
router.get("/:id/following",userController.listFollowing)

//关注
router.put("/following/:id",[auth,checkUserExist],userController.follow)


//取消关注
router.delete("/following/:id",[auth,checkUserExist],userController.unFollow)

//获取用户的粉丝列表
router.get("/:id/followers", userController.listFollowers)

//关注话题
router.put("/followingTopic/:id", [auth,checkTopicExist],userController.followTopic)

//取消关注话题
router.delete('/followingTopic/:id', [auth,checkTopicExist],userController.unfollowTopic)

//获取某个用户的关注列表
router.get("/:id/followingTopic",userController.listFollowingTopic)

//用户的问题列表
router.get("/:id/questions",userController.listQuestions)

module.exports = router
