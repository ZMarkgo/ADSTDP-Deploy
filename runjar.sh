#! /bin/bash
jarPath="wj-1.0.0.jar"
runjarOutPath="log/runjar.out"
# nohup java -jar ${jarPath} > ${runshoutPath} 2>&1 &
nohup java -jar ${jarPath} > ${runjarOutPath} 2>&1 &