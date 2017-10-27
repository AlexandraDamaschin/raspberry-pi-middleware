##  Takea single picture
##  ########################

import picamera
camera = picamera.PiCamera()
camera.capture('img{timestamp:%Y-%m-%d-%H-%M}.jpg')




##  Take Picture every x seconds
##  ########################

# from time import sleep
# from picamera import PiCamera

# camera = PiCamera()
# camera.start_preview()
# sleep(2)
# for filename in camera.capture_continuous('img{counter:03d}.jpg'):
#     print('Captured %s' % filename)
#     sleep(300) # wait 5 minutes



##  Take Picture on the hour
##  ########################

# from time import sleep
# from picamera import PiCamera
# from datetime import datetime, timedelta

# def wait():
#     # Calculate the delay to the start of the next hour
#     next_hour = (datetime.now() + timedelta(hour=1)).replace(
#         minute=0, second=0, microsecond=0)
#     delay = (next_hour - datetime.now()).seconds
#     sleep(delay)

# camera = PiCamera()
# camera.start_preview()
# wait()
# for filename in camera.capture_continuous('img{timestamp:%Y-%m-%d-%H-%M}.jpg'):
#     print('Captured %s' % filename)
#     wait()