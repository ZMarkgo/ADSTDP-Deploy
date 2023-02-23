#! /bin/bash
# Must be whole path
usr="/home/vm2"
pyScriptPath="${usr}/ADSTestProject/ADSTDP-Deploy/test/createLog.py"
runpyOutPath="${usr}/ADSTestProject/ADSTDP-Deploy/log/runpy.out"
logfilePath="${usr}/ADSTestProject/ADSTDP-Deploy/log/log.txt" 
originallogfilePath="${usr}/ADSTestProject/ADSTDP-Deploy/test/log-original.txt"
# echo $pyScriptPath
# echo $runpyOutPath
# echo $logfilePath
# echo $originallogfilePath
nohup python3 ${pyScriptPath} ${logfilePath} ${originallogfilePath} > ${runpyOutPath} 2>&1 &