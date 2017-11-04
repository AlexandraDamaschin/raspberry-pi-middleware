'use strict'

module.exports = function (app) {
  var api = require('../../api/controllers/apiController');
  var firebase = require('../../api/controllers/firebaseController');
  var raspiStill = require('../../api/controllers/raspiStillController');
  var camera = require('../../api/controllers/cameraController');
  

  app.get('/camera', function (req, res, next) {
    camera.take_upload_picture()
    next()
  }, function (req, res) {
    res.send('take and upload')
  })


  app.get('/firebase', function (req, res, next) {
    firebase.upload_file('./uploads/image3.jpg')
    next()
  }, function (req, res) {
    res.send('upload file!')
  })

  app.get('/raspistill', function (req, res, next) {
    raspiStill.take_photo()
    next()
  }, function (req, res) {
    res.send('take photo!')
  })

  
  // API Routes
  app.get('/', function (req, res) {
    res.send('hello, world!')
  })

  app.get('/api', function (req, res) {
    res.render('api.ejs');
  })

  app.get('/api/takePicture', function (req, res, next) {
    api.take_a_picture()
    next()
  }, function (req, res) {
    res.send('Take Picture')
  })

  app.get('/api/uploadImageToFirebase', function (req, res, next) {
    api.upload_image_to_firebase()
    next()
  }, function (req, res) {
    res.send('Upload Image to Firebase')
  })

  app.get('/api/syncGoogleStorage', function (req, res, next) {
    api.sync_google_storage()
    next()
  }, function (req, res) {
    res.send('Sync Google Storage')
  })

  app.get('/api/takePictureHourly', function (req, res, next) {
    api.take_a_picture_hourly()
    next()
  }, function (req, res) {
    res.send('Take Picture Hourly')
  })

  app.get('/api/takePictureEveryX', function (req, res, next) {
    api.take_a_picture_every_x()
    next()
  }, function (req, res) {
    res.send('Take Picture Every X')
  })
};