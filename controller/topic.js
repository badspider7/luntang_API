//导入话题模块
const { Topic } = require("../model/topic");
const { User } = require("../model/user");

//获取话题列表
exports.getTopicsList = async (req, res, next) => {
  try {
    //当前是第几页
    const page = Math.max(req.query.page ? req.query.page : 1 * 1, 1) - 1;
    //每页有几条数据
    const { per_page = 10 } = req.query;
    const perPage = Math.max(Number.parseInt(per_page), 1);

    const topicList = await Topic.find({
      name: new RegExp(req.query.keyword), //话题模糊搜索
    })
      .limit(perPage)
      .skip(page * perPage);
    if (!topicList)
      return res.status(404).json({
        code: 404,
        msg: "获取话题列表失败",
      });
    return res.status(200).json({
      code: 200,
      msg: "获取话题列表成功",
      data: topicList,
    });
  } catch (err) {
    next(err);
  }
};

//获取指定话题
exports.getTopic = async (req, res, next) => {
  try {
    const { fields = "" } = req.query;
    const selectFields = fields
      .split(";")
      .filter((f) => f)
      .map((f) => " +" + f)
      .join("");
    const topic = await Topic.findById(req.params.id).select(selectFields);
    //如果话题不存在
    if (!topic)
      return res.status(400).json({
        code: 400,
        msg: "获取话题失败",
      });
    return res.status(200).json({
      code: 200,
      msg: "获取话题成功",
      data: topic,
    });
  } catch (err) {
    next(err);
  }
};

//创建新话题
exports.createTopic = async (req, res, next) => {
  try {
    //1.检测话题是否存在
    const data = req.body;
    let topic = await Topic.findOne(data);
    //2.如果话题存在
    if (topic) {
      return res.status(400).json({
        code: 400,
        msg: "该话题已经存在",
        value: data,
      });
    }
    //3.话题不存在
    topic = new Topic(data);
    await topic.save();

    res.status(200).json({
      code: 200,
      msg: "话题添加成功",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

//修改话题
exports.updateTopic = async (req, res, next) => {
  try {
    let topicId = req.params.id;
    const data = await Topic.findByIdAndUpdate(topicId, req.body);
    if (!data)
      return res.status(400).json({
        code: 400,
        msg: "更新话题失败",
      });
    res.status(200).json({
      code: 200,
      msg: "更新话题成功",
      data: req.body,
    });
  } catch (err) {
    next(err);
  }
};

//话题的粉丝
exports.listTopicFollowers = async (req, res, next) => {
  try {
    const users = await User.find({ followingTopic: req.params.id });
    if (!users)
      return res.status(400).json({
        code: 400,
        msg: "获取失败",
      });

    res.status(200).json({
      code: 200,
      msg: "获取成功",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

// 话题的问题列表
exports.listQuestions = async (req, res, next) => {
  const questions = await Question.find({topics: req.params.id})
  if(!questions) return res.status(400).json({
    code: 400,
    msg: "查找失败"
  })

  res.status(200).json({
    code: 200,
    msg: "查找成功",
    data: questions
  })
}
