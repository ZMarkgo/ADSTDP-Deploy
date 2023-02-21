# ADSTDP-Deploy

## 一、仓库中的文件说明

`README.md`：此文件

ADSTDP项目的部署文件：
- `dist`文件夹：前端项目的部署文件，通过nginx部署
- `wj-1.0.0.jar`：后端项目的部署文件，通过java启动

模拟测试，`SimulutionTest`文件夹，其中：
- `SimulutionTest/runpy.sh`脚本： 
  - 由java（后端）启动
  - 这个脚本本身会启动我们要调用的python脚本，并使其在后端不中断运行
  - 在这个脚本内部可以设置：
    - 脚本输出重定向的路径`runpyOutPath`，默认为重定向到log/runpy.out
    - 需要调用的python脚本的路径`pyScriptPath`
    - 给python脚本传递的参数`logfilePath`、`originallogfilePath`
- `SimulutionTest/createLog.py`文件：目前用于模拟测试的python脚本，会产生log.txt文件
- `SimulutionTest/log-original.txt`文件：用于模拟测试

日志记录，log文件夹：
- `log/log.txt`文件：
  - 测试产生的日志（目前由`reateLog.py`模拟写入日志），后端需要这个文件的路径，需要同步到网站的后端
- `log/runpy.out`文件：
  - 记录`SimulutionTest/runpy.sh`脚本的输出（其中也包含`SimulutionTest/createLog.py`的输出）
  - 如果`SimulutionTest/runpy.sh`脚本运行出错，错误记录也会输出到此
- `log/runjar.out`文件：
  - 如果使用`runjar.sh`脚本启动jar包，这个文件会记录jar包springboot的输出

`runjar.sh`脚本：
- 后台不中断执行jar包的脚本
- 这个脚本内部执行的命令大致如下：
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

`videos`文件夹：
- 存放视频资源，需要使用文件夹分类
- 目前分为：
  - 场景视频scenario_videos
  - 事故视频accident_videos

## 二、项目部署指南：

1. 修改项目中的跨域配置，打包前端项目和后端项目，将dist文件夹和jar包更新到此仓库。
2. 在服务器上从github拉取新的部署文件
3. 在服务器上使用Nginx运行前端
4. 在服务器上使用java运行后端jar包
5. 检查服务器中MySQL服务状态
6. 检查服务器中Redis服务状态

### 1. 项目打包和上传

修改项目中的跨域配置、数据库配置，然后再后打包项目。
- 后端中：
  - 跨域设置
  - Path设置路径
  - 数据库配置：注意用户名和密码
  - 数据库建表：使用服务器IP
- 前端：
  - 两个跨域
  - upload的action

前端打包，在前端目录下运行`npm run build`，生成dist文件夹。

后端打包，在后端目录下运行`mvn clean install`，在`target`文件夹中生成jar包`wj-1.0.0.jar`。

将它们推送到此仓库。

### 2. 服务器上更新部署文件

在ADSTDP-Deploy目录下执行：
```Shell
git pull
```

### 3. 在服务器上使用Nginx运行前端：

先检查服务器中Nginx的配置文件：
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

> 可以使用`nginx -s quit`命令关闭Nginx：


### 4. 在服务器上使用java运行后端jar包：

首先，关闭运行的旧版本jar包：
- 先找到进程，使用如下命令：
```Shell
ps -aux | grep java
```
- 找到`java -jar wj-1.0.0.jar`的进程号
- 然后杀死进程：
```Shell
kill -9 进程号
```

然后，重新在`runjar.sh`所在目录下运行此脚本：

```Shell
chmod +x ./runjar.sh   #赋予脚本执行权限
./runjar.sh            #执行脚本
```

> 可以打开log/runjar.out查看jar输出。

### 5. 检查服务器中MySQL服务状态

使用如下命令检查MySQL服务状态
```Shell
systemctl status mysql.service
```

显示的信息中有`Active:active(running)`代表MySQL已启动，按q退出。

### 6. 检查服务器中Redis服务状态

先验证redis是否启动：
```Shell
redis-cli
127.0.0.1:6379> ping
PONG
```

解释：
- 执行命令`redis-cli`将打开一个 redis 提示符`redis 127.0.0.1:6379>`，在提示符中，127.0.0.1 是机器的 IP 地址，6379 是 Redis 服务器运行的端口。键入PING 命令。返回 PONG 表示 Redis启动成功



如果redis未启动，可以使用`redis-server`命令启动redis：
```Shell
redis-server
```

再刷新redis，在redis提示符下输入`FLUSHALL`：
```Shell
redis-cli
127.0.0.1:6379> FLUSHALL
OK
```

在redis提示符下输入输入`quit`退出redis-cli。

> 在前后端都运行的情况下，进入浏览器访问服务器IP即可。

## 三、关闭项目

### 1. 关闭Nginx
使用如下命令可以关闭Nginx：

```Shell
nginx -s stop
```

### 2. 关闭jar包

先找到进程，使用如下命令：
```Shell
ps -aux | grep java
```

找到`java -jar wj-1.0.0.jar`的进程号

然后杀死进程：
```Shell
kill -9 进程号
```

### 3. 关闭redis：

先执行命令`redis-cli`，再执行`SHUTDOWN`关闭redis服务，最后执行`exit`命令退出redis提示符：

```Shell
redis-cli
127.0.0.1:6379> SHUTDOWN
not connected> exit
```
