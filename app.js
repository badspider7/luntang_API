//导入配置wenj 
const config = require('./config')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

//处理中间件
app.use(express.json()) //处理json
app.use(cors()) //处理跨域
app.use(morgan('dev')) //处理日志

//引入数据库
require('./model')
//路由
app.use('/api', require('./routes'))
//错误处理中间件
app.use(require('./middleware/error'))
//静态资源托管
app.use(express.static('public'))


app.listen(config.app.port, () => {
    console.log(`server is running at http://localhost:3000`);
})