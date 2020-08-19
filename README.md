## openstack 的后端

应用线上版本部署至 heroku
地址为： [heroku](https://arcane-retreat-67163.herokuapp.com/)

应用在线 mongo 数据库地址为：
[mongo 地址](https://cloud.mongodb.com/v2/5f17ed30646c0f13a3c88946#metrics/replicaSet/5f17f1815081236ac7fedd06/explorer/note-app/notes/find)

### .env 文件内容

```console
MONGO_PWD=fullstackpwd

MONGODB_URI=mongodb+srv://fullstack:fullstackpwd@cluster0.v5zr7.mongodb.net/note-app?retryWrites=true&w=majority

PORT=3001
```

> 关于.env文件可以
[看这篇](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)

### requests 目录下

- 是安装了 vscode 拓展： REST Client

- 使用: ctrl + Alt + R 
[REST Client github](https://github.com/Huachao/vscode-restclient)

- 学习 nodejs
- 熟悉各种操作， 用到 mongo
