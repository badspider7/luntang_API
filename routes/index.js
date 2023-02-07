const router = require("express").Router();

//用户路由
router.use("/user", require("./user"));

//上传路由
router.use("/upload", require("./upload"));

//话题相关路由
router.use("/topics", require("./topic"));

//问题接口路由
router.use("/questions", require("./questions"));

//答案接口路由
router.use("/questions/:questionId/answers", require("./answers"))

//评论接口路由
router.use("/questions/:questionId/answers/:answerId/comments", require('./comments'))

//分类路由
router.use("/categories", require('./categories'))

//文章路由
router.use("/articles", require('./articles'))

//utils 路由
router.use(require("../utils/utils"))

module.exports = router;
