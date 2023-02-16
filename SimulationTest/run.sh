#! /bin/bash
pyScriptPath="/home/zmark/coding/Autonomous-driving-safety-test-demonstration-platform/wj/SimulationTest/createLog.py"
runshoutPath="/home/zmark/coding/Autonomous-driving-safety-test-demonstration-platform/wj/SimulationTest/log/runsh.out"
logfilePath="/home/zmark/coding/Autonomous-driving-safety-test-demonstration-platform/wj/SimulationTest/log/log.txt" 
originallogfilePath="/home/zmark/coding/Autonomous-driving-safety-test-demonstration-platform/wj/SimulationTest/log/log-original.txt"
nohup python3 ${pyScriptPath} ${logfilePath} ${originallogfilePath} > ${runshoutPath} 2>&1 &