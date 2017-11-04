import firebase_admin
from firebase_admin import credentials
import picamera
import time
import os

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# imageFileName = datetime.datetime.now().time()

with picamera.PiCamera() as camera:
    camera.resolution = (1024, 768)
    camera.start_preview()
    camera.iso = 800
    camera.brightness = 60
    camera.hflip = True
    camera.vflip = True
    # Camera warm-up time
    time.sleep(2)
    camera.capture('./imagesCaptured/imageCaptured.jpg')

# os.rename("./imagesCaptured/imageCaptured.jpg", time.strftime("./imagesCaptured/%Y%m%d%H%M%S.jpg"))











# # Import gcloud
# from google.cloud import storage

# # Enable Storage
# client = storage.Client()

# # Reference an existing bucket.
# bucket = client.get_bucket('gs://theprojectawesomebox.appspot.com/images')

# # Upload a local file to a new file to be created in your bucket.
# zebraBlob = bucket.get_blob('20171101155538.jpg')
# zebraBlob.upload_from_filename(filename='/imagesCaptured/20171101155538.jpg')
# def explicit():
#     from google.cloud import bigquery

#     # Explicitly use service account credentials by specifying the private key
#     # file. All clients in google-cloud-python have this helper, see
#     # https://google-cloud-python.readthedocs.io/en/latest/core/modules.html
#     #   #google.cloud.client.Client.from_service_account_json
#     bigquery_client = bigquery.Client.from_service_account_json(
#         './auth/projectawesomebox-6cbe8b5abac9.json')

#     # # Make an authenticated API request
#     # buckets = list(bigquery_client.list_datasets())
#     # print(buckets)
# import json
# import os
# from google.cloud import storage
# # os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = './auth/projectawesomebox-6cbe8b5abac9.json'
# # # Enable Storage
# client = storage.Client()

# # # Reference an existing bucket.
# bucket = client.get_bucket('images')

# # # Upload a local file to a new file to be created in your bucket.
# # zebraBlob = bucket.get_blob('20171101155538.jpg')
# # # zebraBlob.upload_from_filename(filename='/imagesCaptured/20171101155538.jpg')
# # uri = boto.storage_uri('', GOOGLE_STORAGE)
# # # If the default project is defined, call get_all_buckets() without arguments.
# # for bucket in uri.get_all_buckets(headers=header_values):
# print (bucket.name)