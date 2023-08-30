import takePic
import barrier
import time
from datetime import datetime
from libcamera import controls
from picamera2 import Picamera2, Preview
import redis
import parking
import io
import base64
import mongo
import pymongo

def main():
      name='pic.jpg'
      picam2 = Picamera2()
      picam2.set_controls({"AfMode": controls.AfModeEnum.Continuous})
      camera_config = picam2.create_still_configuration(main={"size": (1080,720)}, lores={"size": (1080,720)}, display="lores")
      picam2.configure(camera_config)
      picam2.start_preview(Preview.QTGL)
      picam2.start()
      cam=picam2
      car_number=0
      name2='pi.png'
      print('start server')
      gate=barrier.Barrier()
      r = redis.Redis(host="3.112.247.246", port=6379)
      my_mongo_client = pymongo.MongoClient("mongodb+srv://mnazrth:jX7krpmbpVa3I3GN@cluster0.gwghjgh.mongodb.net/?retryWrites=true&w=majority")
      r.set('ans','False')
      mongo.set_unparking(my_mongo_client,car_number)
      while(True):

            try:
                  im=takePic.take_pic(name,cam) #update with redis
                  with open(name,"rb") as imageFile:
                        
                        str=base64.b64encode(imageFile.read())
                        r.set('pic',str)
                        print('seted pic')
                  
                  if(r.get('ans').decode('ascii')=="True"):
                        car_number=r.get('car_number').decode('ascii')
                        
                        gate.open_barrier()
                        print("gate is open")
                        while(parking.parking_len()>100.0):
                              time.sleep(2)
                        mongo.set_parking(my_mongo_client,car_number)
                        time.sleep(7)
                        while(parking.parking_len()<100.0):
                              time.sleep(2)
                        mongo.set_unparking(my_mongo_client,car_number)
                        time.sleep(5)
                        gate.close_barrier()
                        print("gate is close")
                        r.set('ans','false')
                        time.sleep(5)
                  else:
                        time.sleep(1)
            except Exception as e:
                  print('error in main: ', e)
                  time.sleep(3)
main()
