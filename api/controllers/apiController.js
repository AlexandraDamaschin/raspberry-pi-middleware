'use strict';

exports.take_a_picture = function (req, res) {
    var childProcess = require('child_process'),
    takePicture;
  
  takePicture = childProcess.exec('python take-picture.py', function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  takePicture.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);
  });
};