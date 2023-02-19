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

<<<<<<< HEAD
1. 打包前端项目和后端项目，将dist文件夹和jar包更新到此仓库。
2. 在服务器上拉取新的部署文件
3. 使用Nginx运行前端
4. 使用java运行后端包
=======
1. 修改项目中的跨域配置，打包前端项目和后端项目，将dist文件夹和jar包更新到此仓库。
2. 在服务器上从github拉取新的部署文件
3. 在服务器上使用Nginx运行前端
4. 在服务器上使用java运行后端jar包
5. 检查服务器中MySQL服务状态
6. 检查服务器中Redis服务状态

### 1. 项目打包和上传

修改项目中的跨域配置后打包项目。

前端打包，在前端目录下运行`npm run build`，生成dist文件夹。

后端打包，在后端目录下运行`mvn clean install`，在`target`文件夹中生成jar包`wj-1.0.0.jar`。

将它们推送到此仓库。
>>>>>>> 9f78274... Update README.md

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

#### 方法一：

在`.jar`文件所在的目录下运行它：

```Shell
java -jar wj-1.0.0.jar
```

#### 方法二：

让jar包不挂断的运行可以，在runjar.sh所在目录下运行次脚本：

```Shell
chmod +x ./runjar.sh   #赋予脚本执行权限
./runjar.sh            #执行脚本
```

在这个脚本内部执行的命令大致如下：

```Shell
nohup java -jar wj-1.0.0.jar > log/runjar.out 2>&1 &;
```
- 总体而言，该命令可以在退出帐户/关闭终端之后继续运行相应的进程
- nohup是no hang up的缩写，就是不挂断的意思，这个命令会忽略所有挂断（SIGHUP）信号。
- `> log/runjar.out 2>&1`命令中：
  - 0：stdin (standard input)
  - 1：stdout (standard output)
  - 2：stderr (standard error)
  - `2>&1`是将标准错误（2）重定向到标准输出（&1），标准输出（&1）再被重定向输入到log/runjar.out文件中
- 尾部添加了`&` 表示后台运行nohup命令，即使关掉终端，命令也不会结束。

可以打开log/runjar.out查看jar输出。

关闭运行的jar包：
- 先找到进程，使用如下命令：

```Shell
ps -aux | grep java
```
- 找到`java -jar wj-1.0.0.jar`的进程号
- 然后杀死进程：
  
```Shell
kill -9 进程号
```

在前后端都运行的情况下，进入浏览器访问服务器IP即可。