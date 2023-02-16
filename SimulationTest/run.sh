#! /bin/bash
pyScriptPath="/home/vm2/ADSTestProject/ADSTDP-Deploy/SimulationTest/createLog.py"
runshoutPath="/home/vm2/ADSTestProject/ADSTDP-Deploy/SimulationTest/log/runsh.out"
logfilePath="/home/vm2/ADSTestProject/ADSTDP-Deploy/SimulationTest/log/log.txt" 
originallogfilePath="/home/vm2/ADSTestProject/ADSTDP-Deploy/SimulationTest/log/log-original.txt"
nohup python3 ${pyScriptPath} ${logfilePath} ${originallogfilePath} > ${runshoutPath} 2>&1 &