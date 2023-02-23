import json
import sys
import os
from datetime import datetime
import logging as _Logger
LOG = _Logger.getLogger("check")
# 使用filename指定日志输入的文件
# filemode表示文件打开模式，默认为’a’，即追加模式；可以设为’w’，每次写日志会覆盖之前的日志
_Logger.basicConfig(level = _Logger.DEBUG)
                    # filemode='w',
                    # filename = r"D:\Learning\Autonomous-driving-safety-test-demonstration-platform\wj\SimulationTest\log\checklog.txt")


def Check_Weather(weather):
    key_lists = ["rain", "fog", "wetness", "cloudiness", "damage"]
    for key in key_lists:
        if key not in weather.keys():
            raise NameError("Check Weather error! \n Can't find the key {} in weather object".format(key))
        elif not isinstance (weather[key], (int,float)):
            raise TypeError("Check Weather error! \n The wrong type {}".format(type(weather[key])))
        elif weather[key] < 0 or weather[key] > 1:
            raise ValueError("Check Weather error! \n The wrong value of {} : {}".format(key, weather[key]))
        
def Check_Time(time):
    try:
        dt = datetime(
            year = time["year"],
            month = time["month"],
            day = time["day"],
            hour = time["hour"],
            minute = time["minute"],
            second = time["second"]
        )
    except Exception as e:
        raise ValueError("Check Time error\n {}".format(str(e)))

def Check_Map(map):
    return
    map_file = os.listdir("map_file")
    key_lists = ["id", "name", "parameterType"]
    for key in key_lists:
        if key not in map.keys():
            raise NameError("Check Map error! \n Can't find the key {} in map object".format(key))
    
    if str(map["name"]) + ".xodr" not in map_file:
        raise ValueError("Check Map error! \n Can't find the map {}".format(map["name"]))

def Check_EgoVehicle(ego):
    key_lists = ["variant", "uid", "parameterType", "transform"]
    for key in key_lists:
        if key not in ego.keys():
            raise NameError("Check Ego error! \n Can't find the key {} in ego object".format(key))

    for key in ["position", "rotation"]:
        if key not in ego["transform"]:
            raise NameError("Check Ego error! \n Can't find the key {} in ego transform object".format(key))

    for key in ego["transform"]["position"]:
        if key not in ("x", "y", "z"):
            raise ValueError("Check EGO error! \n The wrong key {} in position".format(key))
        if not isinstance (ego["transform"]["position"][key], (int,float)):
            raise TypeError("Check Ego error! \n The wrong type {} in position".format(type(ego["transform"]["position"][key])))
    for key in ego["transform"]["rotation"]:
        if key not in ("x", "y", "z"):
            raise ValueError("Check EGO error! \n The wrong key {} in rotation".format(key))
        if not isinstance (ego["transform"]["rotation"][key], (int,float)):
            raise TypeError("Check Ego error! \n The wrong type {} in rotation".format(type(ego["transform"]["rotation"][key])))
    if "destinationPoint" in ego:
        des_position = ego["destinationPoint"]["position"]
        des_rotation = ego["destinationPoint"]["rotation"]
        for key in des_position:
            if key not in ("x", "y", "z"):
                raise ValueError("Check EGO error! \n The wrong key {} in destination position".format(key))
            if not isinstance (des_position[key], (int,float)):
                raise TypeError("Check Ego error! \n The wrong type {} in destination position".format(type(des_position[key]))) 
        for key in des_rotation:
            if key not in ("x", "y", "z"):
                raise ValueError("Check EGO error! \n The wrong key {} in destination rotation".format(key))
            if not isinstance (des_rotation[key], (int,float)):
                raise TypeError("Check Ego error! \n The wrong type {} in destination rotation".format(type(des_rotation[key])))     

def Check_NPCVehicle(NPC):
    variant = NPC["variant"]
    parameterType = NPC["parameterType"]
    position = NPC["transform"]["position"]
    rotation = NPC["transform"]["rotation"]
    behaviour = NPC["behaviour"]["name"]
    if "parameters" in NPC["behaviour"].keys():
        behaviour_parameters = NPC["behaviour"]["parameters"]
    else:
        behaviour_parameters = None
    waypoints_data = NPC["waypoints"]
    color = NPC["color"]
    if variant not in ("Sedan", "SUV", "Jeep", "Hatchback", "SchoolBus", "BoxTruck", "Bicyclist"):
        raise ValueError("Check NPC error! \n the variant {} is not defined".format(variant))
    for key in position:
        if key not in ("x", "y", "z"):
            raise ValueError("Check NPC error! \n The wrong key {} in position".format(key))
        if not isinstance (position[key], (int,float)):
            raise TypeError("Check NPC error! \n The wrong type {}".format(type(position[key])))
    for key in rotation:
        if key not in ("x", "y", "z"):
            raise ValueError("Check NPC error! \n The wrong key {} in position".format(key))
        if not isinstance (rotation[key], (int,float)):
            raise TypeError("Check NPC error! \n The wrong type {}".format(type(rotation[key])))
    if behaviour not in ("NPCWaypointBehaviour", "NPCLaneFollowBehaviour"):
        raise ValueError("Check NPC error!\n the behaviour {} is not defined".format(behaviour))
    for key in color:
        if key not in ("r", "g", "b"):
            raise ValueError("Check NPC error! \n The wrong key {} in color".format(key))
        if not isinstance (color[key], (int,float)):
            raise TypeError("Check NPC error! \n The wrong type {}".format(type(color[key])))
        if color[key] < 0 or color[key] > 1:
            raise ValueError("Check NPC error!\n the color {} : {} is out of range".format(key,color[key]))

    for i ,waypoint_data in enumerate(waypoints_data):
        position = waypoint_data["position"]
        for key in position:
            if key not in ("x", "y", "z"):
                raise ValueError("Check NPC error! \n The wrong key {} in waypoint angle".format(key))
            if not isinstance (position[key], (int,float)):
                raise TypeError("Check NPC error! \n The wrong type {} in waypoint position".format(type(position[key])))
        speed = waypoint_data["speed"]
        if not isinstance (speed, (int,float)):
                raise TypeError("Check NPC error! \n The wrong type {} in waypoint speed".format(type(speed)))
        angle = waypoint_data["angle"]
        for key in angle:
            if key not in ("x", "y", "z"):
                raise ValueError("Check NPC error! \n The wrong key {} in waypoint angle".format(key))
            if not isinstance (angle[key], (int,float)):
                raise TypeError("Check NPC error! \n The wrong type {} in waypoint angle".format(type(angle[key])))
        if "wait_time" in waypoint_data:
            wait_time = waypoint_data["wait_time"]
        else:
            wait_time = waypoint_data["waitTime"]
        if not isinstance (wait_time, (int,float)):
                raise TypeError("Check NPC error! \n The wrong type {} in waypoint wait_time".format(type(wait_time)))
        effectors_data = waypoint_data["trigger"]["effectors"]
        for effector_data in effectors_data:
            if effector_data["typeName"] not in ("WaitForDistance", "WaitTime", "TimeToCollision"):
                raise ValueError("Check NPC error!\n the trigger type {} is not defined".format(effector_data["typeName"]))

def Check_Pedestrian(ped):
    variant = ped["variant"]
    parameterType = ped["parameterType"]
    position = ped["transform"]["position"]
    rotation = ped["transform"]["rotation"]

    waypoints_data = ped["waypoints"]
    if variant not in ("Bob", "EntrepreneurFemale", "Howard", "Johny", "Pamela", "Presley", "Robin", "Stephen", "Zoe", "Deer", "Turkey", "Bill"):
        raise ValueError("Check Pedestrian error! \n the variant {} is not defined".format(variant))
    for key in position:
        if key not in ("x", "y", "z"):
            raise ValueError("Check Pedestrian error! \n The wrong key {} in position".format(key))
        if not isinstance (position[key], (int,float)):
            raise TypeError("Check Pedestrian error! \n The wrong type {}".format(type(position[key])))
    for key in rotation:
        if key not in ("x", "y", "z"):
            raise ValueError("Check Pedestrian error! \n The wrong key {} in position".format(key))
        if not isinstance (rotation[key], (int,float)):
            raise TypeError("Check Pedestrian error! \n The wrong type {}".format(type(rotation[key])))
            
    for i ,waypoint_data in enumerate(waypoints_data):
        position = waypoint_data["position"]
        for key in position:
            if key not in ("x", "y", "z"):
                raise ValueError("Check Pedestrian error! \n The wrong key {} in waypoint position".format(key))
            if not isinstance (position[key], (int,float)):
                raise TypeError("Check Pedestrian error! \n The wrong type {} in waypoint position".format(type(position[key])))
        speed = waypoint_data["speed"]
        if not isinstance (speed, (int,float)):
                raise TypeError("Check Pedestrian error! \n The wrong type {} in waypoint speed".format(type(speed)))
        angle = waypoint_data["angle"]
        for key in angle:
            if key not in ("x", "y", "z"):
                raise ValueError("Check Pedestrian error! \n The wrong key {} in waypoint angle".format(key))
            if not isinstance (angle[key], (int,float)):
                raise TypeError("Check Pedestrian error! \n The wrong type {} in waypoint angle".format(type(angle[key])))
        if "wait_time" in waypoint_data:
            wait_time = waypoint_data["wait_time"]
        else:
            wait_time = waypoint_data["waitTime"]
        if not isinstance (wait_time, (int,float)):
                raise TypeError("Check Pedestrian error! \n The wrong type {} in waypoint wait_time".format(type(wait_time)))
        effectors_data = waypoint_data["trigger"]["effectors"]
        for effector_data in effectors_data:
            if effector_data["typeName"] not in ("WaitForDistance", "WaitTime", "TimeToCollision"):
                raise ValueError("Check Pedestrian error!\n the trigger type {} is not defined".format(effector_data["typeName"]))

def Check_StaticObstacle(controllable_data):
    position = controllable_data["transform"]["position"]
    rotation= controllable_data["transform"]["rotation"]
    for key in position:
        if key not in ("x", "y", "z"):
            raise ValueError("Check Static Obstacle error! \n The wrong key {} in position".format(key))
        if not isinstance (position[key], (int,float)):
            raise TypeError("Check Static Obstacle error! \n The wrong type {}".format(type(position[key])))
    for key in rotation:
        if key not in ("x", "y", "z"):
            raise ValueError("Check Static Obstacle error! \n The wrong key {} in position".format(key))
        if not isinstance (rotation[key], (int,float)):
            raise TypeError("Check Static Obstacle error! \n The wrong type {}".format(type(rotation[key])))
    if "name" in controllable_data:
        obj_name = controllable_data["name"]
        if obj_name not in ("TrafficCone","ChargingStation", "TriggerZone"):
            raise ValueError("Check Static Obstacle error! \n the obstacle {} is not defined".format(obj_name))
    policys = controllable_data["policy"]
    for policy in policys:
        for x in policy:
            if x not in ("action", "value"):
                raise ValueError("Check Static Obstacle error! \n The wrong key {} in policy".format(x))

def Check_Traffic_light(light):
    policys = light["policy"]
    for policy in policys:
        for x in policy:
            if x not in ("action", "value"):
                raise ValueError("Check Traffic Light error! \n The wrong key {} in policy".format(x))


class CheckADScenario:
    def __init__(self,_seed_path=None):
        self.seed_path = _seed_path
        self.json_obj = None
        self.hash = None

    def isVaild(self):
        """
            Detects whether the JSON file is a valid scene file
            Returns True if it is valid or False if it is invalid
        """
        if self.seed_path == None:
            return False
        try:

            with open(self.seed_path) as f:
                self.json_obj = json.load(f)
            have_essential_elements =   "weather" in self.json_obj.keys() and \
                                        "time" in self.json_obj.keys() and \
                                        "map" in self.json_obj.keys() and \
                                        "agents" in self.json_obj.keys() and \
                                        "controllables" in self.json_obj.keys()
            if not have_essential_elements:
                return False
            else:
                Check_Weather(self.json_obj["weather"])                
                Check_Time(self.json_obj["time"])
                Check_Map(self.json_obj["map"])
                agents_data = self.json_obj["agents"]
                is_have_ego = False
                for agent_data in agents_data:
                    agent_type_id = agent_data["type"]
                    if agent_type_id == 1:
                        Check_EgoVehicle(agent_data)
                        is_have_ego = True
                    elif agent_type_id == 2:
                        Check_NPCVehicle(agent_data)

                    elif agent_type_id == 3:
                        Check_Pedestrian(agent_data)
                    
                    else:
                        raise ValueError("Can't identify the agent with agent type id{}".format(agent_type_id))
                if not is_have_ego:
                    raise("Can't find ego in the file")
                controllables_data = self.json_obj["controllables"]
                for controllable_data in controllables_data:
                    spawned = controllable_data["spawned"]
                    if spawned:
                        Check_StaticObstacle(controllable_data)
                    else:
                        Check_Traffic_light(controllable_data)
        except Exception as e:
            LOG.exception(str(e))
            return False
        return True

def isValid(_seed):
    scenario = CheckADScenario(_seed)
    return scenario.isVaild()

def checkDir(_seeds):
    seeds = os.listdir(_seeds)
    for seed in seeds:
        print(seed,isValid(_seeds + "/{}".format(seed)))

def main():
    if len(sys.argv) == 2:
        print(isValid(sys.argv[1]))
    else :
        print(False)

def test():
    seedDir = "D:/Learning/Autonomous-driving-safety-test-demonstration-platform/wj/SimulationTest/scenarios"
    checkDir(seedDir)

# test()
main()