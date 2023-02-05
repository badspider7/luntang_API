const router = require('express').Router()

const topicController = require('../controller/topic')

const auth = require("../middleware/auth")
const validator = require('../middleware/validate')
const { topicValidator } = require('../model/topic')
const checkTopicExist = require('../middleware/checkTopicExist')

//获取话题列表
router.get('/',topicController.getTopicsList)

//查询指定话题
router.get('/:id', topicController.getTopic)

//新增话题
router.post("/",[auth,validator(topicValidator)],topicController.createTopic)

//更新话题信息
router.patch("/:id", [auth, validator(topicValidator)], topicController.updateTopic)

//话题的粉丝
router.get('/:id/followers', checkTopicExist, topicController.listTopicFollowers)

//话题的问题列表
router.get("/:id/questions",checkTopicExist,topicController.listQuestions)

module.exports = router