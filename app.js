const express = require('express'); //类似于 const http = require（‘http’）：
// const fs = require('fs');
// const path = require('path')
const routers = require('./routers')
const bodyParser = require('body-parser')
// const querystring = require('querystring') // 可以用来处理URL地址。把传输过来的数据通过parse方法转换成Object;方便数据处理。
const app = express(); //cosnt server = http.createServer((req,res)=>{})
// 普通的网页数据提交
app.use(bodyParser.urlencoded({extended : false}));
// ajax数据提交
app.use(bodyParser.json())
//这里写的代码：类似（req,res)=>{}
// 1.get代表针对get请求进行处理
// 2.当用户的请求是get请求，同时请求的url地址是/的时候
// 3.get 方法的第二个参数就执行了
// a.req代表请求头
// b.res用来做响应
app.use(routers);
app.listen(3000,()=>{
    console.log('port 3000')
})