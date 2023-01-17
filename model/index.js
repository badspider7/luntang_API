const mongoose = require('mongoose')
const config = require('../config')

mongoose.set('strictQuery', true)
//连接数据库
mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

// 当连接失败的时候
db.on('error', err => {
    console.log('MongoDB 数据库连接失败',err);
})

//当连接成功的时候
db.once('open', function () {
    console.log('MongoDB 数据库连接成功');
})