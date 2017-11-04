'use strict';
var firebase = require('../../api/controllers/firebaseController');

exports.take_upload_picture = function (req, res) {

    const { spawn } = require('child_process');
    const captureImage = spawn('raspistill', ['-w', '640', '-h', '480', '-vf', '-hf', '-o', 'imagesCaptured/capture.jpg']);
    
    captureImage.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    captureImage.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });
    
    captureImage.on('close', (code) => {
      console.log(`Capture image exited with code: ${code}`)
      firebase.upload_file('imagesCaptured/capture.jpg')
    });

};