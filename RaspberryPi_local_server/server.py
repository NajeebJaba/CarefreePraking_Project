import licenceplateML
import redis
from PIL import Image
import myPlates
import base64
#import savePic
#import myPlates
import time

def server():
    print("test")
    name="pic.jpg"
    r=redis.Redis(host="3.112.247.246", port=6379)
    plates=[]
    number=''
    print("start loop")
    while(True):
        try:
    #r = redis.Redis()
            im=r.get('pic')
            print('read pic from server' )
            #im=im.decode('utf-8')
            im=base64.b64decode(im)
            fh = open(name, "wb")
            fh.write(im)
            fh.close()
            print("write pic")
            try:
                plates=myPlates.get_plates()
                r.set('car_number',plates[0])
            except:
                print("failed to get reservation license plate")
            number=licenceplateML.getNumber(name)
            # number='22603301'#for testing
            if(number!="" and str(number) in plates and str(r.get('ans').decode('ascii'))!='True' and myPlates.check_plate(number) ):#[0])
                        print("Resrvation license number is matching")
                        r.set('ans', 'True')
                        myPlates.delete_plate(number)

            if(len(number)>8):  
                number=number[1:]  
                if(number!="" and str(number) in plates and str(r.get('ans').decode('ascii'))!='True' and myPlates.check_plate(number) ):#[0]):
                    print("Resrvation license number is matching")
                    r.set('ans', 'True')
                    myPlates.delete_plate(number)
        except Exception as e:
            print("error"+str(e))
        time.sleep(2)

        """
        im=r.get('pic')
        fh = open(name, "wb")
        fh.write(im.decode('base64'))
        fh.close()
        #im = im.save(name)
        """
       
            
                        
    pass

server()


"""
import socket
HOST = "127.0.0.1"  # Standard loopback interface address (localhost)
PORT = 65432  # Port to listen on (non-privileged ports are > 1023)
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    conn, addr = s.accept()
    with conn:
        print(f"Connected by {addr}")
        while True:
            data = conn.recv(1024)
            if not data:
                break
            conn.sendall(data)
            """





