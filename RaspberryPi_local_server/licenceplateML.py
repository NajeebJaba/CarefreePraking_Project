import cv2
from matplotlib import pyplot as plt
import numpy as np
import imutils
import easyocr
import pytesseract
from PIL import Image


def getNumber(filename):
    print(filename)

    image = cv2.imread(filename)
    print('start read number')
    # Convert the image to HSV color space
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Define the lower and upper bounds of the yellow color in HSV color space
    lower_yellow = (15, 40, 40)
    upper_yellow = (50, 240, 240)

    # Create a mask that selects only the yellow areas in the image
    mask = cv2.inRange(hsv, lower_yellow, upper_yellow)

    # Find the contours in the mask
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Find the largest contour (which should be the yellow frame)
    largest_contour = max(contours, key=cv2.contourArea)

    # Create a mask that covers everything outside of the yellow frame
    outside_mask = cv2.bitwise_not(cv2.fillPoly(mask.copy(), [largest_contour], 255))

    # Apply the mask to the image
    result = cv2.bitwise_and(image, image, mask=outside_mask)

    # Extract the part of the image inside the yellow frame
    x, y, w, h = cv2.boundingRect(largest_contour)
    try:
        cropped_image = image[y:y+h, x:x+w+50]
    except:
        pass

    gray = cv2.cvtColor(cropped_image, cv2.COLOR_BGR2GRAY)
    # Save the cropped image
    cv2.imwrite('output.jpg', gray)

    image = Image.open('output.jpg')

    # Use pytesseract to extract text from the image
    text = pytesseract.image_to_string(image)
    predicted_result = pytesseract.image_to_string(image,  config='--psm 10')
    txt=""
    for i in predicted_result:
        if i in "0123456789":
            txt=txt+i
    print('LPR number is: '+txt)
    return  str(txt)