// 引入文章的 Model
const { Article } = require("../model/articles");
let trim = require("trim-html");

const moment = require("moment-timezone");

// 获取文章列表
exports.getArticlesList = async (req, res, next) => {
  try {
    //默认每页是7篇
    const { per_page = 7 } = req.query;
    // 每页有几项
    const perPage = Math.max(per_page * 1, 1);
    // 当前是第几页
    const page = Math.max((req.query.page ? req.query.page : 1) * 1, 1) - 1;
    // 检测是否存在 状态 | 分类 筛选参数
    const { status, category } = req.query;
    let data;
    if (status || category) {
      data = await Article.find(req.query)
        .populate("author category")
        .limit(perPage)
        .skip(page * perPage)
        .sort({ _id: -1 });
    } else {
      data = await Article.find()
        .populate("author category")
        .limit(perPage)
        .skip(page * perPage)
        .sort({ _id: -1 });
    }
    const totalCounts = await (
      await Article.find().populate("author category")
    ).length;

    res.status(200).json({
      code: 200,
      msg: "获取所有文章成功",
      data: {
        list: data,
        totalCount: data.length,
        pageNumber: page + 1,
        totalCounts: totalCounts,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 获取指定文章
exports.getArticle = async (req, res, next) => {
  try {
    // 1.根据id获取数据
    const id = req.params.id;
    const data = await Article.findById(id).populate("category author");
    data.view++;
    data.save();
    // 2.检测是否存在数据
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: "获取文章失败",
        value: {
          id,
        },
      });
    }
    // 成功响应
    res.status(200).json({
      code: 200,
      msg: "获取文章成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// 添加新的文章
exports.createArticle = async (req, res, next) => {
  try {
    let time = new Date();
    req.body.createdAt = time.toLocaleString('zh-cn', {
      dateStyle: "long",
      timeStyle: "short",
      hour12: false,
    })
    // 1.创建并存储数据
    let data = new Article(
      Object.assign(req.body, {
        author: req.userData._id,
      })
    );
    let trimmed = trim(req.body.content, {
      preserveTags: true,
      limit: 200,
      more: true,
    });
    data.excerpt = trimmed.html;

    await data.save();
    // 2.响应
    res.status(200).json({
      code: 200,
      msg: "添加文章成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    // 1.修改数据
    const data = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // 2.检测并响应
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: "文章修改失败",
      });
    }
    res.status(200).json({
      code: 200,
      msg: "文章修改成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    // 1.删除数据
    const data = await Article.findByIdAndDelete(req.params.id);
    // 2.检测并响应
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: "删除文章失败",
      });
    }
    // 响应
    res.status(200).json({
      code: 200,
      msg: "删除文章成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};
