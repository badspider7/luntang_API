const {
    Article
} = require("../model/articles")
  
const {
    Question
} = require("../model/questions");
  
//模糊搜索
exports.getContent = async (req, res, next) => {
    try {
        let keyword = req.params.keyword
       const article = await  Article.find({ title: { $regex: new RegExp(keyword, 'i') } }); 

        const question = await Question.find({ title: { $regex: new RegExp(keyword, 'i') } }); 
        
        if (article.length == 0 && question.length == 0) {
            return res.status(200).json({
                code: 400,
                msg: '查询不到数据',
                data:{}
            })
        }
        return res.status(200).json({
            code: 200,
            msg:'获取成功',
            data: {
                'article':article.slice(0,10),
                'question':question.slice(0,5)
            },
          });
    } catch (err) {
        next(err);
    }
}