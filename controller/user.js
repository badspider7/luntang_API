//导入用户模块
const { User } = require("../model/user");
//导入加密模块
const bcrypt = require("bcrypt");
const { Question } = require("../model/questions");

const axios = require("axios")

//用户注册
exports.register = async (req, res, next) => {
  try {
    let { email, password, username } = req.validValue;
    //1.检验邮箱是否已经注册
    let user = await User.findOne({ email });
    //2.如果注册了，返回失败的响应
    if (user) {
      return res.status(400).json({
        code: 400,
        msg: "邮箱已经存在，请重新输入",
        data: { email },
      });
    }
    //3.如果没有注册，那就放入数据库
    //3.1对密码进行加密
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    //3.2 创建 user 实例
    user = new User({
      email,
      password,
      username,
    });
    //3.3保存到数据库
    await user.save();
    res.status(200).json({
      code: 200,
      msg: "注册成功",
      data: { email, username },
    });
  } catch (err) {
    next(err);
  }
};

//用户登录
exports.login = async (req, res, next) => {
  try {
    //获取校验后的数据
    const validValue = req.validValue;
    //1.检测用户是否存在
    let user = await User.findOne({ email: validValue.email }).select(
      "+password"
    );
    //2.如果用户不存在，返回失败的响应
    if (!user) {
      return res.status(400).json({
        code: 400,
        msg: "邮箱或者密码错误",
      });
    }
    //3.如果用户存在，对密码进行校验
    //对用户输入的密码进行加密，与数据库中的密码进行配对
    let compareResult = await bcrypt.compare(
      validValue.password,
      user.password
    );
    //4.如果密码错误，返回失败的响应
    if (!compareResult) {
      return res.status(400).json({
        code: 400,
        msg: "邮箱或者密码错误",
      });
    }
    //5.如果密码正确，登录成功,返回token
    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      code: 200,
      msg: "登录成功!",
      authorization: {
        token: user.generateToken(),
      },
      avatar_url:user.avatar_url
    });
  } catch (err) {
    next(err);
  }
};

//获取所有用户
exports.getUserList = async (req, res, next) => {
  try {
    let userList = await User.find();
    //用户列表不存在
    if (!userList) {
      return res.status(400).json({
        code: 400,
        msg: "用户列表不存在",
      });
    }
    //如果存在，返回用户列表
    res.status(200).json({
      code: 200,
      msg: "用户列表查询成功",
      data: { userList },
    });
  } catch (err) {
    next(err);
  }
};

//获取指定用户
exports.getUser = async (req, res, next) => {
  try {
    //通过 query 参看哪些参数需要返回
    const { field = "" } = req.query;
    const selectFields = field
      .split(";")
      .filter((f) => f)
      .map((f) => " +" + f)
      .join("");
    let userId = req.params.id;
    const user = await User.findById(userId).select(selectFields);

    if (!user)
      return res.status(400).json({
        code: 400,
        msg: "用户不存在",
      });
    res.status(200).json({
      code: 200,
      msg: "查询指定用户成功",
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

//修改用户信息 ---有bug，未解决
exports.updateUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let body = req.body;
    //3.1对密码进行加密
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    //查找并且修改
    const data = await User.findByIdAndUpdate(userId, body);
    //如果查找失败
    if (!data)
      return res.status(400).json({
        code: 400,
        msg: "更新失败",
      });
    //更新成功
    res.status(200).json({
      code: 200,
      msg: "更新成功",
      data: { body },
    });
  } catch (err) {
    next(err);
  }
};

//删除用户
exports.deleteUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    const data = await User.findByIdAndDelete(userId);
    //查询失败
    if (!data)
      return res.status(400).json({
        code: 400,
        msg: "删除用户失败",
        value: {
          _id: user.id,
        },
      });
    //查询成功
    const body = req.body;
    return res.status(200).json({
      code: 200,
      msg: "用户删除成功",
      data: { body },
    });
  } catch (err) {
    next(err);
  }
};

//获取关注列表
exports.listFollowing = async (req, res, next) => {
  try {
    let userId = req.params.id;
    const user = await User.findById(userId)
      .select("+following")
      .populate("following");
    //未找到
    if (!user)
      return res.status(400).json({
        code: 400,
        msg: "获取关注列表失败",
      });
    //获取成功
    res.status(200).json({
      code: 200,
      msg: "获取关注列表成功",
      data: user,
    });
    // res.send('ok')
  } catch (err) {
    next(err);
  }
};

//关注  有bug，不能自己关注自己,其实好像也可以
exports.follow = async (req, res, next) => {
  try {
    console.log(req.userData);
    // 获取数据
    let userId = req.userData._id;

    const user = await User.findById(userId.toString()).select("+following");
    //如果已经关注过，就直接return
    if (user.following.map((id) => id.toString()).includes(req.params.id))
      return res.status(400).json({
        code: 400,
        msg: "已关注过，关注失败",
      });
    //如果之前没有关注过，再关注
    user.following.push(req.params.id);
    await user.save();
    res.status(200).json({
      code: 200,
      msg: "关注成功",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

//取消关注
exports.unFollow = async (req, res, next) => {
  try {
    let userId = req.userData._id;
    const user = await User.findById(userId.toString()).select("+following");
    //获取所关注的用户的索引
    const index = user.following
      .map((id) => id.toString())
      .indexOf(req.params.id);
    //如果没有关注，取消失败
    if (index == -1)
      return res.status(400).json({
        code: 400,
        msg: "未关注，取消关注失败",
      });

    //已经关注，就进行取消操作
    user.following.splice(index, 1);
    await user.save();
    res.status(200).json({
      code: 200,
      msg: "取消关注成功",
    });
  } catch (err) {
    next(err);
  }
};

//获取用户的粉丝列表
exports.listFollowers = async (req, res, next) => {
  try {
    const user = await User.find({ following: req.params.id });
    if (!user)
      return res.status(400).json({
        code: 400,
        msg: "查询粉丝列表失败",
      });

    res.status(200).json({
      code: 200,
      msg: "查询粉丝列表成功",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// 关注话题
exports.followTopic = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+followingTopic")
    // 如果已经关注过了就直接return
    if(user.followingTopic.map(id => id.toString()).includes(req.params.id)) return res.status(400).json({
      code: 400,
      msg: "已关注,关注失败"
    })
    // 成功
    user.followingTopic.push(req.params.id)
    await user.save()
    res.status(200).json({
      code: 200,
      msg: "关注成功",
      data: user
    })
  }catch(err) {
    next(err)
  }
}

// 取消关注话题
exports.unfollowTopic = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+followingTopic")
    // 获取所关注的用户的索引
    const index = user.followingTopic.map(id => id.toString()).indexOf(req.params.id)
    // 若没有关注，就取消失败
    if(index == -1) return res.status(400).json({
      code: 400,
      msg: "未关注,取消关注失败"
    })
    // 若已经关注，则取消
    user.followingTopic.splice(index, 1);
    await user.save()
    res.status(200).json({
      code: 200,
      msg: "取消关注成功"
    })
  }catch(err) {
    next(err)
  }
}

// 获取某个用户关注的话题
exports.listFollowingTopic = async (req, res, next) => {
  try{
    let userId = req.params.id;
    const user = await User.findById(userId).select("+followingTopic").populate("followingTopic")
    // 未找到
    if(!user) return res.status(400).json({
      code: 400,
      msg: "查询失败"
    })
    // 获取成功
    res.status(200).json({
      code: 200,
      msg: "查询成功",
      data:  user 
    })
  } catch(err) {
    next(err)
  }
};


// 用户的问题列表
exports.listQuestions = async (req, res, next) => {
  try{
    const questions = await Question.find({questioner: req.params.id})
    if(!questions) return res.status(400).json({
      code: 400,
      msg: "问题列表查找失败"
    })
    res.status(200).json({
      code: 200,
      msg: "成功,666!",
      data: questions
    })
  }catch(err) {
    next(err)
  }
}

/* 
  赞的
*/
// 喜欢答案
exports.likeAnswer = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+likingAnswers")
    if(!user.likingAnswers.map(id => id.toString()).includes(req.params.id)){
      user.likingAnswers.push(req.params.id)
      await user.save()
      await Answer.findByIdAndUpdate(req.params.id, { $inc: {voteCount: 1} })
    }
    // res.status(200).json({
    //   code: 200,
    //   msg: "操作成功",
    //   data: user
    // })
    await next()
  }catch(err) {
    next(err)
  }
}

// 取消喜欢
exports.unlikeAnswer = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+likingAnswers")
    const index = user.likingAnswers.map(id => id.toString()).indexOf(req.params.id)
    if(index > -1) {
      user.likingAnswers.splice(index, 1);
      await user.save()
      await Answer.findByIdAndUpdate(req.params.id, { $inc: {voteCount: -1} })
    }
    res.status(200).json({
      code: 200,
      msg: "成功"
    })
  }catch(err) {
    next(err)
  }
}

// 喜欢的答案列表
exports.listLikingAnswers = async (req, res, next) => {
  try{
    let userId = req.params.id;
    const user = await User.findById(userId).select("+likingAnswers").populate("likingAnswers")
    // 未找到
    if(!user) return res.status(400).json({
      code: 400,
      msg: "操作失败"
    })
    // 获取成功
    res.status(200).json({
      code: 200,
      msg: "操作成功",
      data:  user 
    })
  } catch(err) {
    next(err)
  }
};

/* 
  踩的
*/
// 不喜欢答案
exports.dislikeAnswer = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+dislikingAnswers")
    if(!user.dislikingAnswers.map(id => id.toString()).includes(req.params.id)){
      user.dislikingAnswers.push(req.params.id)
      await user.save()
    }
    // res.status(200).json({
    //   code: 200,
    //   msg: "操作成功",
    //   data: user
    // })
    await next()
  }catch(err) {
    next(err)
  }
}

// 取消不喜欢
exports.undislikeAnswer = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+dislikingAnswers")
    const index = user.dislikingAnswers.map(id => id.toString()).indexOf(req.params.id)
    if(index > -1) {
      user.dislikingAnswers.splice(index, 1);
      await user.save()
    }
    res.status(200).json({
      code: 200,
      msg: "成功"
    })
  }catch(err) {
    await next(err)
  }
}

// 不喜欢的答案列表
exports.listDisLikingAnswers = async (req, res, next) => {
  try{
    let userId = req.params.id;
    const user = await User.findById(userId).select("+dislikingAnswers").populate("dislikingAnswers")
    // 未找到
    if(!user) return res.status(400).json({
      code: 400,
      msg: "操作失败"
    })
    // 获取成功
    res.status(200).json({
      code: 200,
      msg: "操作成功",
      data:  user 
    })
  } catch(err) {
    next(err)
  }
};

// 收藏答案
exports.collectingAnswer = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+collectingAnswers")
    // 如果已经关注过了就直接return
    if(user.collectingAnswers.map(id => id.toString()).includes(req.params.id)) return res.status(400).json({
      code: 400,
      msg: "已收藏,收藏失败"
    })
    // 成功
    user.collectingAnswers.push(req.params.id)
    await user.save()
    res.status(200).json({
      code: 200,
      msg: "收藏成功",
      data: user
    })
  }catch(err) {
    next(err)
  }
}

// 取消收藏
exports.uncollectingAnswer = async (req, res, next) => {
  try{
    let userId = req.userData._id
    const user = await User.findById(userId.toString()).select("+collectingAnswers")
    const index = user.collectingAnswers.map(id => id.toString()).indexOf(req.params.id)
    if(index == -1) return res.status(400).json({
      code: 400,
      msg: "未收藏,取消收藏失败"
    })
    // 若已经关注，则取消
    user.collectingAnswers.splice(index, 1);
    await user.save()
    res.status(200).json({
      code: 200,
      msg: "取消收藏成功",
      data: user
    })
  }catch(err) {
    next(err)
  }
}

// 收藏列表
exports.listCollectingAnswers = async (req, res, next) => {
  try{
    let userId = req.params.id;
    const user = await User.findById(userId).select("+collectingAnswers").populate("collectingAnswers")
    // 未找到
    if(!user) return res.status(400).json({
      code: 400,
      msg: "操作失败"
    })
    // 获取成功
    res.status(200).json({
      code: 200,
      msg: "操作成功",
      data:  user 
    })
  } catch(err) {
    next(err)
  }
};


