#! /bin/bash
jarPath="wj-1.0.0.jar"
runjarOutPath="log/runjar.out"
nohup java -jar ${jarPath} > ${runjarOutPath} 2>&1 &