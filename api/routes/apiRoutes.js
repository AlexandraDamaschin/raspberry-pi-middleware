'use strict'

module.exports = function(app) {
    var api = require('../controllers/apiController');

    // API Routes
    // app.route('/api')
    //     .get(api.take_picture);
    // };


    // app.get('/api', function (req, res) {
    //     res.send('Hello from A!')
    //   })

      app.get('/api/takePicture', function (req, res, next) {
        api.take_a_picture()
        next()
      }, function (req, res) {
        res.send('Picure taken')
      })


    };