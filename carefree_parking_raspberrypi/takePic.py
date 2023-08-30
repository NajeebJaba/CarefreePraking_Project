from time import sleep
from picamera import PiCamera
from PIL import Image
import redis

def take_pic(file_name,cam):
    
    #camera.start_preview()
    # Camera warm-up time
    sleep(3)
    cam.capture_file(file_name)
    #camera.capture(file_name)
    im = Image.open(file_name) 
    return im
