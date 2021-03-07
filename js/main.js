/*
请求地址：https://wthrcdn.etouch.cn/weather_mini
请求方法：get
请求参数：city
响应内容：天气信息

1、点击回车
2、查询数据
3、渲染数据

*/


var app = new Vue({
    el:"#app",
    data:{
        city:'',
    },
    methods: {
        searchWeather:function(){
            // console.log("查询天气");
            //alert("查询");
            // console.log(this.city);
            //调用接口
            axios.get('https://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){})
        }
    },
})