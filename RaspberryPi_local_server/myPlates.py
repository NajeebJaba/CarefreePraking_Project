import pymongo
import datetime

def get_plates():
    r=[]
    myclient = pymongo.MongoClient("mongodb+srv://mnazrth:jX7krpmbpVa3I3GN@cluster0.gwghjgh.mongodb.net/?retryWrites=true&w=majority")
    mydb = myclient["test"]
    mycol = mydb["users"]
    for x in mycol.find():
      #print(x)
      r.append(x["license_plate"])
    print("the license plate from reservation: ")
    print(r)
    return r
    pass

def check_plate(plate):
    myclient = pymongo.MongoClient("mongodb+srv://mnazrth:jX7krpmbpVa3I3GN@cluster0.gwghjgh.mongodb.net/?retryWrites=true&w=majority")
    mydb = myclient["test"]
    #print('plate')
    plate=str(plate)
    mycol = mydb["reservations"]
    for x in mycol.find():
        
        if(x['car_license_number']==plate):
            date_time = datetime.datetime.now()
            print(x['car_license_number'])
            print(x['entrance_actual_time'][:2])
            print(x['entrance_actual_date'])
            print(str(date_time)[11:13])
            print()
            if(x['entrance_actual_date']==str(date_time)[:10] and x['entrance_actual_time'][:2]==str(date_time)[11:13]):
                return True
  
    return False


def delete_plate(num):
    myclient = pymongo.MongoClient("mongodb+srv://mnazrth:jX7krpmbpVa3I3GN@cluster0.gwghjgh.mongodb.net/?retryWrites=true&w=majority")
    mydb = myclient["test"]
    mycol = mydb["users"]
    mycol.delete_one({"license_plate": num})