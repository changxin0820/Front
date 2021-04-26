//1.引入express
const { request, response } = require('express');
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
//request对请求报文封装，require为响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('I am sunshine(express)原生ajaxGET');
});
//app,all(所有请求都可)
app.all('/server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置相应
    response.send('I am sunshine(express)原生ajaxPOST');
});
//给json-server发
app.all('/json-server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        // name: "Weichangxin"
        'name': '<button>test2</button>'
    }
    //对对象进行转换
    let str = JSON.stringify(data);    //设置相应
    response.send(str);
});
//延时响应
app.get('/networkerror', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        //设置响应
        response.send('延时响应');
    }, 3000)
});
//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = { name: '我是WCX' }
    response.send(JSON.stringify(data));
})
//fetch服务
app.all('/fetch-server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = { name: '我是WCX' }
    response.send(JSON.stringify(data));
})

//jsonp服务
app.all('/jsonp-server', (request, response) => {
    const data = { name: '我是WCX' }
    //response.send('console.log("hello,完成了jsonp跨域！")');
    //将数据转化为字符串
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

//jsonp用户名是否存在
app.all('/check-server', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在！'
    }
    //response.send('console.log("hello,完成了jsonp跨域！")');
    //将数据转化为字符串
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

//cors，必须设置响应头
app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000')

    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应
    // response.send('I am sunshine(express)原生ajaxGET');
    const data = {
        'name': 'wcx'
    }
    // response.send('HELLO CORS!');
    response.write('HELLO');
    response.write('WCX');
    // response.write(JSON.stringify(data));
    response.end();
})

//4.监听端口，启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中。。。。");
})