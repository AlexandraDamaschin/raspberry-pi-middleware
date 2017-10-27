const express = require('express')
const app = express();

var routes = require('./api/routes/apiRoutes');
routes(app);

app.listen(3000, function () {
  console.log('App listening')
})