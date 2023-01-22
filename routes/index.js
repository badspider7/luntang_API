const router = require("express").Router();

//用户路由
router.use("/user", require("./user"));

//上传路由
router.use("/upload", require("./upload"));

//话题相关路由
router.use("/topic", require("./topic"));

//问题接口路由
router.use("/questions", require("./questions"));

//答案接口
router.use("/questions/:questionId/answers", require("./answers"));

module.exports = router;
