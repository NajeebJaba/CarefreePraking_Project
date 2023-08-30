import pymongo 
from datetime import datetime, timedelta

def set_parking(myclient,car_number):
    mydb = myclient["test"]
    mycol = mydb["parking_spot"]
    current_datetime = datetime.now()
    datetime_string = current_datetime.strftime("%Y-%m-%d %H:%M:%S")

    entrance_date, entrance_time = datetime_string.split(' ')
    mydict = { "parking_spot": "Occupied","entrance_date": entrance_date, "entrance_time": entrance_time ,"car_number":car_number}

    x = mycol.insert_one(mydict)

    
def set_unparking(myclient,car_number):

    mydb = myclient["test"]
    mycol = mydb["parking_spot"]
    current_datetime = datetime.now()
    datetime_string = current_datetime.strftime("%Y-%m-%d %H:%M:%S")

    departure_date, departure_time = datetime_string.split(' ')
    mydict = { "parking_spot": "Vacant","departure_date":departure_date, "departure_time":departure_time, "car_number":car_number }
    x = mycol.insert_one(mydict)
    

    
