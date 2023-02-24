#! /bin/bash
# Must be whole path
usr="/home/vm2"
# pyScriptPath="${usr}/ADSTestProject/ADSTDP-Deploy/test/createLog.py"
runpyOutPath="${usr}/ADSTestProject/ADSTDP-Deploy/log/runpy.out"
# logfilePath="${usr}/ADSTestProject/ADSTDP-Deploy/log/log.txt" 
# originallogfilePath="${usr}/ADSTestProject/ADSTDP-Deploy/test/log-original.txt"
# echo $pyScriptPath
# echo $runpyOutPath
# echo $logfilePath
# echo $originallogfilePath
# nohup python3 ${pyScriptPath} ${logfilePath} ${originallogfilePath} > ${runpyOutPath} 2>&1 &
mkdir /home/vm2/ADSTestProject/ADSTest_sql/test_file/50
python3 /home/vm2/ADSTestProject/ADSTest_sql/ADS-FUZZER_sql/ads_fuzzer.py --test_id 50 > ${runpyOutPath} 2>&1 &
# <test_id>是指当前正在准备运行的实例的testid