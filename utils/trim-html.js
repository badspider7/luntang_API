/**
 * 截取文章的摘要
 */

/**
 * 1.在article save 之前，调用这个方法
 * 2. 把content 里面的markdown 先解析成HTML ，然后用 trim-html 截取 需要的字数
 * 
 */

let trim = require('trim-html')


const html = '<h1>hellowhatisyourname ,my name is badspider </h1>'
let trimmed = trim(html,{preserveTags:true,limit:2,more:true})

console.log(trimmed);