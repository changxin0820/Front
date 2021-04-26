//1.引入express
const { request, response } = require('express');
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
//request对请求报文封装，require为响应报文的封装
app.get('/', (request, response) => {
    //设置相应
    response.send('I am sunshine(express)');
});
//4.监听端口，启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中。。。。");
})