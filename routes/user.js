const router = require('express').Router()
const { userValidator } = require('../model/user')
const validator = require('../middleware/validate')
const userController = require('../controller/user')
const auth = require('../middleware/auth')
const checkUserExist = require('../middleware/checkUserExist')
const checkTopicExist = require('../middleware/checkTopicExist')
const checkAnswerExist = require('../middleware/checkAnswerExist')

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
router.get("/:id/questions", userController.listQuestions)

// 喜欢答案
router.put("/likingAnswers/:id", [auth, checkAnswerExist],  userController.likeAnswer, userController.undislikeAnswer)

// 取消喜欢
router.delete("/likingAnswers/:id", [auth, checkAnswerExist], userController.unlikeAnswer)

// 喜欢列表
router.get('/:id/likingAnswers', userController.listLikingAnswers);

// 不喜欢答案
router.put("/dislikingAnswers/:id", [auth, checkAnswerExist],  userController.dislikeAnswer, userController.unlikeAnswer)

// 取消不喜欢
router.delete("/dislikingAnswers/:id", [auth, checkAnswerExist], userController.undislikeAnswer)

// 不喜欢列表
router.get('/:id/dislikingAnswers', userController.listDisLikingAnswers);

// 收藏
router.put("/collectingAnswers/:id", [auth, checkAnswerExist], userController.collectingAnswer)

// 取消收藏
router.delete("/collectingAnswers/:id", [auth, checkAnswerExist], userController.uncollectingAnswer)

// 收藏列表
router.get("/:id/collectingAnswers", userController.listCollectingAnswers)

// //获取用户头像
// router.get('/avatar/:id')

module.exports = router
