# ADSTDP-Deploy

## 仓库中文件说明

这个仓库中包含ADSTDP项目的部署文件：
- dist文件夹：前端项目的部署文件，通过nginx部署
- jar包：后端项目的部署文件，通过java启动

还有SimulutionTest文件夹，进行模拟测试：
- run.sh脚本：
  - 由java（后端）启动
  - 这个脚本本身会启动我们要调用的脚本，并使其在后端运行
  - 在这个脚本内部可以设置：
    - 脚本输出重定向的路径`runshoutPath`，默认为重定向到log/runsh.out 
    - 需要调用的python脚本的路径`pyScriptPath`
    - 给python脚本传递的参数`logfilePath`、`originallogfilePath`
- createLog.py脚本，目前用于模拟测试的python脚本，会产生log.txt文件，
- log文件：
  - log.txt，测试产生的模拟日志，后端中有这个文件的路径，需要同步后端项目的路径
  - log-original.txt，用于模拟测试
  - runsh.out，记录run.sh脚本的输出

## 项目部署指南：

1. 打包前端项目和后端项目，将dist文件夹和jar包更新到此仓库。
2. 在服务器上拉取新的部署文件
3. 使用Nginx运行前端
4. 使用java运行后端包

### 1. 使用Nginx运行前端：

先检查配置文件：
- 打开Nginx配置文件：
```Shell
sudo vim /etc/nginx/sites-enabled/default
```
- 检查其中的`root`，确保为dist文件的路径
- 使用`sudo nginx -t`查看配置是否成功：
```Shell
sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

> 如果报错，查看之前修改的配置文件是否规范。

然后重新启动Nginx，会要求输入Ubuntu的密码：

```Shell
 service nginx restart 
```

可以使用如下命令关闭Nginx：

```Shell
nginx -s quit
```

### 2. 使用java运行后端：

在`.jar`文件所在的目录下运行它：

```Shell
java -jar wj-1.0.0.jar
```

在前后端都运行的情况下，进入浏览器访问服务器IP即可。