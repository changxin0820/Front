//nodejs中fs文件系统实践，读写文件
//1\新建文件夹
var fs = require("fs")

fs.mkdir('./测试新建文件夹', function (err) {
    // if (err) console.log(err);
    console.log('测试新建文件夹成功');
})
//2\新建文件
fs.writeFile('./Test新建文件.txt', '这是测试文件！内容', function (err) {
    // if (err) console.log(err);//
    console.log('新建文件成功');
})

//3\创建流
//通过读取一个文件内容并将内容写入到另外一个文件中。
//创建一个可读流
let readerStream = fs.createReadStream('1.json');
//创建一个可写流
let writerStream = fs.createWriteStream('./2.json');
//管道读写操作
//读取1.json的内容，并将内容写入到2.json文件中
readerStream.pipe(writerStream);

//判断文件存在
let isExist = fs.existsSync('./1.json');
console.log(isExist);

//遍历文件夹
let arr = fs.readdirSync('./测试新建文件夹');//同步真香！
console.log(arr);

//删除文件
fs.unlink('./2.json', function (err) {
    // if (err) console.log(err);//
    console.log('删除文件成功');
})