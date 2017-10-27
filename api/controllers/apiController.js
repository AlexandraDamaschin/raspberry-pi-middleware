'use strict';

exports.take_a_picture = function (req, res) {
    var childProcess = require('child_process'),
    takePicture;
  
  takePicture = childProcess.exec('python ./scripts/take-picture.py', function (error, stdout, stderr) {
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

exports.take_a_picture_hourly = function (req, res) {
  var childProcess = require('child_process'),
  takePicturHourly;


takePicturHourly = childProcess.exec('python ./scripts/take-picture.py', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
  console.log('Child Process STDERR: ' + stderr);
});

takePicturHourly.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
});
};


exports.take_a_picture_every_x = function (req, res) {
  var childProcess = require('child_process'),
  takePictureEveryX;

takePictureEveryX = childProcess.exec('python ./scripts/take-picture.py', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
  console.log('Child Process STDERR: ' + stderr);
});

takePictureEveryX.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
});
};