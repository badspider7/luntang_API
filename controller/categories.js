// 引入分类 Model
const { Category } = require("../model/categories");

// 获取分类列表
exports.getCategoryList = async (req, res, next) => {
  try {
    // 当前是第几页
    const page = Math.max(req.query.page?req.query.page:1 * 1, 1) - 1;
    // 每页有几条数据
    const { per_page = 10 } = req.query;
    const perPage = Math.max(per_page * 1, 1);
    const keyword = new RegExp(req.query.keyword);

    // 1.查询所有的分类信息
    const data = await Category.find({ name: keyword })
      .limit(perPage)
      .skip(page * perPage);
    // 2.响应
    res.status(200).json({
      code: 200,
      msg: "分类获取成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// 获取指定分类
exports.getCategory = async (req, res, next) => {
  try {
    // 1.检测是否存在  动态路由参数
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        code: 400,
        msg: "请传入分类 id",
      });
    }
    // 2.根据动态路由参数获取分类
    const data = await Category.findById(id);

    // 3.检测并响应
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: "获取信息失败,请稍后再试!",
        value: {
          id,
        },
      });
    }

    res.status(200).json({
      code: 200,
      msg: "分类信息获取成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// 新增分类
exports.createCategory = async (req, res, next) => {
  try {
    // 1 检测是否已存在要添加的分类信息
    const data = req.body;
    let cate = await Category.findOne(data);
    // 2.若分类信息已存在
    if (cate) {
      return res.status(400).json({
        code: 400,
        msg: "该分类已存在",
        value: data,
      });
    }

    // 3.创建数据并保存
    cate = new Category(data);
    await cate.save();

    res.status(200).json({
      code: 200,
      msg: "分类添加成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// 更新分类
exports.updateCategory = async (req, res, next) => {
  try {
    // 1.检测 id 信息
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        code: 400,
        msg: "请传入id",
      });
    }
    // 2.根据动态路由参数更新数据
    const data = await Category.findByIdAndUpdate(id, req.body, { new: true});
    // 3.判断是否编辑成功
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: "编辑分类失败",
        value: req.body,
      });
    }
    res.status(200).json({
      code: 200,
      msg: "编辑成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// 删除分类
exports.deleteCategory = async (req, res, next) => {
  try {
    // 1.根据动态路由删除分类
    const id = req.params.id;
    const data = await Category.findByIdAndDelete(id);
    // 2.根据返回值判断是否删除成功
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: "分类删除失败",
        value: {
          id,
        },
      });
    }
    // 成功响应
    res.status(200).json({
      code: 200,
      msg: "删除分类成功",
      data,
    });
  } catch (err) {
    next(err);
  }
};