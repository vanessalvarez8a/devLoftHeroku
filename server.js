var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var secret = require('./secret');
var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;
var port = 9000;
var app = express();
var mongoUri = 'mongodb://localhost/showcase'; //creating the database name
var User = require('./features/user/User.js');

app.use(bodyParser.json());
app.use(cors());
app.use(session({secret: 'my-session-secret', resave: false, saveUninitialized: false,}));
app.use(passport.initialize());
app.use(passport.session());





var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
}

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GitHubStrategy({
    clientID: secret.clientID, //referring to a file: secret
    clientSecret: secret.clientSecret,
    callbackURL: "http://localhost:9000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ githubId: profile.id }, function (err, user) {
      if(err)
          return cb(err);
      if(user)
          return cb(null, user);
      else {
          var newUser = new User();
          newUser.name = profile.displayName;
          newUser.email = profile.emails[0].value;
          newUser.save(function(err){
              if(err) {
                  throw err;
              }
              return cb(err, newUser);
          })
          console.log(user);
      }
      // return cb(err, user);
    });
    console.log(profile);
  }
));





app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/logout', function(req, res) {
  req.logout();
  res.send('logged out');
})

app.get('/me', function(req, res) {
  console.log(req.user);
  res.json(req.user);
});

app.get("/checklogged", function(req, res){
    res.send(req.isAuthenticated() ? req.user : '0'); // if req.isAuthenticated is ? true send req.user else : send '0'
});


mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongo at ' + mongoUri);
})

require('./features/projects/projectRoutes')(app);
require('./features/user/userRoutes')(app);


app.use(express.static('public'));

app.listen(port, function() {
  console.log('listening on ' + port);
})
