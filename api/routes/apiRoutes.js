'use strict'

module.exports = function (app) {
  var api = require('../controllers/apiController');

  // API Routes
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