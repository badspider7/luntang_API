const router = require('express').Router()
const axios = require('axios')
const circularJson = require('circular-json');

router.get("/getpoem", async (req, res, next) => {
    try {
        const result = await axios({
            method: "get",
            url: "https://v1.hitokoto.cn?c=i&&max_length=20&&encode=text",
        })
        res.status(200).json({
            code: 200,
            msg: "请求成功",
            data:circularJson.stringify(result.data.split('。')[0])
            
        })

    } catch (err) {
        next(err)
    }

})

module.exports = router