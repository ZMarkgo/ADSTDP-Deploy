#! /bin/bash
# Must be whole path
usr="/home/vm2"
pyScriptPath="/home/vm2/ADSTestProject/ADSTest_sql/ADS-FUZZER_sql/ads_fuzzer.py"
runpyOutPath="${usr}/ADSTestProject/ADSTDP-Deploy/log/runpy.out"
# echo $pyScriptPath
# echo $runpyOutPath
testCaseId=50
mkdir /home/vm2/ADSTestProject/ADSTest_sql/test_file/${testCaseId}
python3 ${pyScriptPath} --test_id ${testCaseId} > ${runpyOutPath} 2>&1 &
# <test_id>是指当前正在准备运行的实例的testid