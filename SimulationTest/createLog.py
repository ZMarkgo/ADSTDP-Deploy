#!/usr/bin/env python
# ADSTDP项目测试
# 产生一个日志文件，持续更新日志文件
import time
import shutil
import sys
import os


def writeNum(logfilePath, num):
    f = open(logfilePath, "a")
    str_out = str(num)
    f.write(str_out)
    f.write(" ")
    f.close()


class LogInfo:
    queueNum = 0  # 测试场景队列数量
    testedScenariosNum = 0  # 已测试场景数量
    accidentScenariosNum = 0  # 事故场景数量
    iterations = 0  # 迭代次数
    testDuration = 0  # 测试时长h
    currentTestCaseId = 0  # 当前测试实例ID

    # 写入测试信息
    def writeLogInfo(self, logfilePath):
        f = open(logfilePath, "a")
        f.write("[LogInfo] ")
        str_out = str(self.queueNum) + " " + str(self.testedScenariosNum) + " " + str(
            self.accidentScenariosNum) + " " + str(self.iterations) + " " + str(self.testedScenariosNum) + " " + str(
            self.currentTestCaseId)
        f.write(str_out)
        f.write("\n")
        f.close()


# 模拟测试一个实例，并改写测试日志
def test(logfilePath, testcaseId):
    i = 0
    # 模拟测试中产生的过程日志
    while i <= 5:
        time.sleep(1)
        str_out = "--update:" + str(i)
        print(str_out)
        i += 1
        f = open(logfilePath, "a")
        f.write(str_out)
        f.write("\n")
        f.close()


# 重置日志文件
def restoreLogFile(logfile, logfileOrignal):
    # restore log.txt from log-original.txt
    fin = open(logfileOrignal, "r")
    fout = open(logfile, "w")
    shutil.copyfileobj(fin, fout)
    fin.close()
    fout.close()


def main():
    logfilePath = "log/log.txt"
    logfileOrignal = "log/log-original.txt"
    if len(sys.argv) == 3:
        logfilePath = sys.argv[1]
        logfileOrignal = sys.argv[2]
    print("logfilePath:",logfilePath)
    print("logfileOrignal:",logfileOrignal)
    restoreLogFile(logfilePath, logfileOrignal)
    testCases = [1, 6, 9, 2, 5, 8, 3, 4, 7]  # 测试实例id列表
    logInfo = LogInfo()
    logInfo.queueNum = len(testCases)
    for id in testCases:
        logInfo.currentTestCaseId = id
        logInfo.writeLogInfo(logfilePath)
        test(logfilePath, id)
        logInfo.testedScenariosNum += 1
    f = open(logfilePath, "a")
    f.write("Test ended!")
    f.write("\n")
    f.close()

# print(os.getcwd())
main()
