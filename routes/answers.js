const router = require("express").Router()
const auth = require("../middleware/auth")
const { answerValidator} = require("../model/answers")
const validator = require("../middleware/validate")
const checkAnswerer = require("../middleware/checkAnswerer")
const checkAnswerExist = require("../middleware/checkAnswerExist")
const answer = require("../controller/answers")

// 获取答案列表
// router.get("/:questionId/answers/", answer.getAnswersList)

// 获取指定答案
router.get("/:questionId/answers/:id", checkAnswerExist, answer.getAnswer)

// 新增答案
router.post("/:questionId/answers", [auth, validator(answerValidator)], answer.createAnswer)

// 修改答案
router.patch("/:questionId/answers/:id", [auth, validator(answerValidator), checkAnswerExist, checkAnswerer] ,answer.updateAnswer)

// 删除答案
router.delete("/:questionId/answers/:id", [auth, checkAnswerExist, checkAnswerer], answer.deleteAnswer)


module.exports = router
