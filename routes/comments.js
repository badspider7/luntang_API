const router = require("express").Router()
const { commentValidator} = require("../model/comments")
const validator = require("../middleware/validate")

const comment = require("../controller/comments")
const auth = require("../middleware/auth")
const checkCommentExist = require("../middleware/checkCommentExist")
const checkCommentator = require("../middleware/checkCommentator")

// 获取评论列表
router.get("/", comment.getCommentsList)

// 获取指定评论
router.get("/:id", comment.getComment)

// 新增评论
router.post("/", [auth, validator(commentValidator)], comment.createAnswer)

// 修改评论
router.patch("/:id", [auth, checkCommentExist, checkCommentator], comment.updateComment)

// 删除评论
router.delete("/:id", [auth, checkCommentExist, checkCommentator], comment.deleteComment)


module.exports = router