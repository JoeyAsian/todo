const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

// telling passport we want to use local strategy, in other words we want to use
// email and password
passport.use(new LocalStrategy(
    function(email, password, done) {
      db.User.findOne( { where: { email: email } } ).then( function(dbuser){
        // if there is no user with the provided email
        if (!dbuser) {
            return done(null, false, { message: 'Incorrect Email.' } );
        }
        // if there is a user with that email but the password is wrong
        else if (!dbuser.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' } );
        }

        // if none of the above happens, return user
        return done(null, dbuser);
      });
    }
));
// authenticate users to a cookie we must serialize the user session

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// following request need there session to be deserialized

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// exporting passport for our app to use it

module.exports = passport;