const router = require("express").Router()

const auth = require("../middleware/auth")

const { questionValidator} = require("../model/questions")
const validator = require("../middleware/validate")

const checkQuestioner = require("../middleware/checkQuestioner")
const checkQuestionsExist = require("../middleware/checkQuestionExist")

const question = require("../controller/questions")

// 获取问题列表
router.get("/", question.getQuestionsList)

// 获取指定问题
router.get("/:id", checkQuestionsExist, question.getQuestion)

// 新增问题
router.post("/", [auth, validator(questionValidator)], question.createQuestion)

// 修改问题
router.patch("/:id", [auth, validator(questionValidator), checkQuestionsExist, checkQuestioner], question.updateQuestion)

// 删除问题
router.delete("/:id", [auth, checkQuestionsExist, checkQuestioner], question.deleteQuestion)

module.exports = router