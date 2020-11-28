# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码


# 垃圾分类小程序
## 小程序使用到的云开发内容

云函数，云数据库：
- 数据库：存储四种垃圾分类的相关垃圾数据。
- 云函数：获取百度识别库的accessToken
[百度AI识别库地址](http://ai.baidu.com/docs#/ImageClassify-API/ebc492b1)
## 需要修改为自己的key 
1. 小程序key 在文件project.config.json->appid 记住创建小程序的时候选择云开发
2. 百度key 主要做拍照识别的cloudfunctions->baiduAccessToken->index->apiKey和secretKey
此处替换为：API Key 和 Secret Key

## 常见错误
1. 没有自己部署云函数
2. 数据库没有给与相应的权限，最好给最大权限
3. 需要的key 配置错误。
4. 没有创建数据库名称
