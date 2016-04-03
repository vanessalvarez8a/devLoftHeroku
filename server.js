var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = 9000;

var app = express();
var mongoUri = 'mongodb://localhost/showcase'; //creating the database name 

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongo at ' + mongoUri);
})

require('./features/projects/projectRoutes')(app);

app.use(express.static('public'));

app.listen(port, function() {
  console.log('listening on ' + port);
})
