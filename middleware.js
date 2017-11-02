const express = require('express')
const app = express();
const fs = require('fs');

var port = process.env.PORT || 3000;
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var firebaseAdmin = require("firebase-admin");
var serviceAccount = require("./config/auth/projectawesomebox-6cbe8b5abac9.json");

//  configure app
var configDB = require('./config/firebase/database.js');

// configure middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('combined'));
app.use(logger('common', {stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'api/views'));
app.set('view engine', 'ejs');

// define routes
var routes = require('./config/routes/apiRoutes');
routes(app);

//  launch
app.listen(port, function () {
  console.log('App listening on port ' + port )
})

//  catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});

app.use(function (req, res, next) {
  res.status(500).render('404', {title: "Sorry, page not found"});
});
exports = module.exports = app;