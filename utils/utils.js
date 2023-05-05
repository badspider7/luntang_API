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

router.get('/news', async (req, res, next) => {
    try {
        console.log(1);
        const result = await axios({
            method: "get",
            url: "https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=da39dce4f8aa52155677ed8cd23a6470",
        })
        res.status(200).json({
            code: 200,
            msg: "请求成功",
            data: circularJson.stringify(result.data)
            
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router