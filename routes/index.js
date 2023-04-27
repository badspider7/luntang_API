const router = require("express").Router();
const {
    Answer
} = require("../model/answers");

//用户路由
router.use("/user", require("./user"));

//上传路由
router.use("/upload", require("./upload"));

//话题相关路由
router.use("/topics", require("./topic"));

//问题接口路由
router.use("/questions", require("./questions"));

//答案接口路由
router.use("/questions", require("./answers"));

//评论接口路由
router.use("/questions", require('./comments'))
// router.use("/article", require('./comments'))

//分类路由
router.use("/categories", require('./categories'))

//文章路由
router.use("/articles", require('./articles'))

//utils 路由
router.use(require("../utils/utils"))


//获取答案列表
router.get('/questions/:questionId/answerlist/', async (req, res, next) => {
    try {
        const {
            per_page = 10
        } = req.query;
        // 每页有几项
        const perPage = Math.max(per_page * 1, 1);
        // 当前是第几页
        const page = Math.max((req.query.page ? req.query.page : 1) * 1, 1) - 1;

        const keyword = new RegExp(req.query.keyword)
        const answersList = await Answer.find({
                content: keyword,
                questionsId: req.params.questionId
            })
            .populate("answerer")
            .limit(perPage)
            .skip(page * perPage);

        console.log(req.params.questionId);

        if (!answersList)
            return res.status(400).json({
                code: 400,
                msg: "获取答案列表失败",
            });
        res.status(200).json({

            code: 200,
            msg: "获取答案列表成功",
            data: answersList,
        });
    } catch (err) {
        next(err);
    }
})

module.exports = router;