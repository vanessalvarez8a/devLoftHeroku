var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = 8081;

var app = express();
var mongoUri = 'mongodb://localhost:27017';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongo at ' + mongoUri);
})

require('./features/projects/projectRoutes')(app);


app.listen(port, function() {
  console.log('listening on ' + port);
})
