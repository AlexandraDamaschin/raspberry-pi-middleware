##  Takea single picture
##  ########################

import picamera
camera = picamera.PiCamera()
camera.capture('img{timestamp:%H-%M}.jpg')