const express = require('express')
const app = express();

var firebaseAdmin = require("firebase-admin");

var serviceAccount = require("./auth/projectawesomebox-6cbe8b5abac9.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  // databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

// var storage = firebaseAdmin.app().storage("gs://theprojectawesomebox.appspot.com/images");
// var file = File.applicationStorageDirectory.resolvePath("20171101155538.jpg");

// storage.put(file).then(function (snapshot) {
//   console.log("Uploaded file.");
// });

var routes = require('./api/routes/apiRoutes');
routes(app);

app.listen(3000, function () {
  console.log('App listening')
})