module.exports = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        url:'mongodb://127.0.0.1:27017/zhihu'
    },
    secret: 'badspider'
}