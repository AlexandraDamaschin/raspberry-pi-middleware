from subprocess import call
call(["gsutil", "-m", "cp", "-r", "imagesCaptured", "gs://theprojectawesomebox.appspot.com/images"])
# call(["ls", "-l"])
print ("Google Sync called")