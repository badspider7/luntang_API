//导入用户模块
const { User } = require("../model/user");
//导入加密模块
const bcrypt = require("bcrypt");

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
      code: 200,
      msg: "登录成功!",
      authorization: {
        token: user.generateToken(),
      },
    });
  } catch (err) {
    next(err);
  }
};

//获取所有用户
exports.getUserList = async (req, res, next) => {
  try {
      let userList = await User.find()
      //用户列表不存在
      if (!userList) {
          return res.status(400).json({
              code: 400,
              msg:"用户列表不存在"
          })
      }
      //如果存在，返回用户列表
      res.status(200).json({
          code: 200,
          msg: "用户列表查询成功",
          data: {userList}
      })
  } catch (err) {
    next(err);
  }
};

//获取指定用户
exports.getUser =async (req, res, next) => {
  try {
      const userId = req.params.id
      const user = await User.findById(userId)
      if (!user) return res.status(400).json({
          code: 400,
          msg:"用户不存在"
      })
      res.status(200).json({
          code: 200,
          msg: "查询指定用户成功",
          data:{user}
      })
  } catch (err) {
    next(err);
  }
};

//修改用户信息 ---有bug，未解决
exports.updateUser =async (req, res, next) => {
    try {
        let userId = req.params.id
        let body = req.body
        //查找并且修改
        const data = await User.findByIdAndUpdate(userId,body)
        //如果查找失败
        if (!data) return res.status(400).json({
            code: 400,
            msg: '更新失败'
        })
        //更新成功
        res.status(200).json({
            code: 200,
            msg: "更新成功",
            data: {body}
        })
  } catch (err) {
    next(err);
  }
};

//删除用户
exports.deleteUser =async (req, res, next) => {
    try {
        let userId = req.params.id
        const data = await User.findByIdAndDelete(userId)
        //查询失败
        if (!data) return res.status(400).json({
            code: 400,
            msg: "删除用户失败",
            value: {
                _id: user.id
            }
        })
        //查询成功
        const body = req.body
        return res.status(200).json({
            code: 200,
            msg: "用户删除成功",
            data:{body}
        })
  } catch (err) {
    next(err);
  }
};
