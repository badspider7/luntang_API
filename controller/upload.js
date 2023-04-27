
//文件上传
exports.upload = (req, res, next) => {
    try {
        console.log(req.file);
        res.status(200).json({
            code: 200,
            msg: "上传成功",
            data: "http://localhost:3000/" + "upload/" + req.file.originalname
            // data: "http://localhost:3000/" + "upload/" + req.body.name
        })
    } catch (err) {
        next(err)
    }
}