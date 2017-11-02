##  Takea single picture
##  ########################

import picamera
import time
import os

with picamera.PiCamera() as camera:
    camera.resolution = (1024, 768)
    camera.start_preview()
    # camera.awb_mode = 'off'
    # camera.exposure_mode = 'off'
    # camera.drc_strength='off'
    # camera.shutter_speed = 0
    camera.iso = 800
    camera.brightness = 60
    camera.hflip = True
    camera.vflip = True
    # Camera warm-up time
    time.sleep(2)
    # camera.shutter_speed = camera.exposure_speed
    camera.capture('./imagesCaptured/imageCaptured.jpg')


os.rename("./imagesCaptured/imageCaptured.jpg", time.strftime("./imagesCaptured/%Y%m%d%H%M%S.jpg"))


