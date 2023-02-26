#! /bin/bash
# Must be whole path
usr="/home/vm2"
pyScriptPath="${usr}/ADSTestProject/ADSTest_sql/ADS-FUZZER_sql/ads_fuzzer.py"
runpyOutPath="${usr}/ADSTestProject/ADSTDP-Deploy/log/runpy.out"
testCaseId=$1
mkdir ${usr}/ADSTestProject/ADSTest_sql/test_file/${testCaseId}
nohup python3 ${pyScriptPath} --test_id ${testCaseId} > ${runpyOutPath} 2>&1 &
# $! 获取到最后一个在后台执行的进程ID
# $pid 保存该进程ID，并使用 wait 命令等待该进程执行完毕
pid=$!
wait $pid
# 判断python脚本是否执行成功
if [ $? -eq 0 ]; then
    echo "PYTHON_SCRIPT_SUCCESS"
else
    echo "PYTHON_SCRIPT_FAILURE"
fi