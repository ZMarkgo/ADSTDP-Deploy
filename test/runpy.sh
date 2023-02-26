#! /bin/bash
# Must be whole path
usr="/home/vm2"
pyScriptPath="/home/vm2/ADSTestProject/ADSTest_sql/ADS-FUZZER_sql/ads_fuzzer.py"
runpyOutPath="${usr}/ADSTestProject/ADSTDP-Deploy/log/runpy.out"
testCaseId=$1
mkdir /home/vm2/ADSTestProject/ADSTest_sql/test_file/${testCaseId}
python3 ${pyScriptPath} --test_id ${testCaseId} > ${runpyOutPath} 2>&1 &