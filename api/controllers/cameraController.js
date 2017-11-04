'use strict';
var firebase = require('../../api/controllers/firebaseController');
var fs = require('fs');
var moment = require('moment');

exports.take_upload_picture = function (req, res) {

  const {
    spawn
  } = require('child_process');
  const captureImage = spawn('raspistill', ['-w', '640', '-h', '480', '-vf', '-hf', '-o', 'imagesCaptured/capture.jpg']);

  captureImage.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  captureImage.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  captureImage.on('close', (code) => {
    console.log(`Capture image exited with code: ${code}`)

    var fileName = 'imagesCaptured/capture-' + moment().format() + '.jpg';
    fs.rename('imagesCaptured/capture.jpg', fileName, function (err) {
      if (err) console.log('File Rename Error: ' + err);
    });
    
    firebase.upload_file(fileName, function (err) {
      if (err) console.log('Firebase Upload Error: ' + err);
    })
  });

};