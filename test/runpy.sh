#! /bin/bash
# 定义处理 SIGTERM 信号的函数
function on_sigterm() {
    kill $pythonPID
    exit 0
}

# 注册 SIGTERM 信号处理函数
trap on_sigterm SIGTERM

# Must be whole path
usr="/home/vm2"
pyScriptPath="${usr}/ADSTestProject/ADSTest_sql/ADS-FUZZER_sql/ads_fuzzer.py"
runpyOutPath="${usr}/ADSTestProject/ADSTDP-Deploy/log/runpy.out"
testCaseId=$1
cd ${usr}/ADSTestProject/ADSTest_sql/ADS-FUZZER_sql
mkdir ${usr}/ADSTestProject/ADSTest_sql/test_file/${testCaseId}
nohup python3 ${pyScriptPath} --test_id ${testCaseId} > ${runpyOutPath} 2>&1 &
# $! 获取到最后一个在后台执行的进程ID
# $pid 保存该进程ID
# 使用 wait 命令等待该进程执行完毕
pythonPID=$!
wait $pythonPID