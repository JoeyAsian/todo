const passport = require('passport');
const LocalStragety = require('passport-local').Strategy;

const db = require('../models');

// telling passport we want to use local stratagy, in other words we want to use an email and a password
passport.use(new LocalStrategy(
    function(email, password, done) {
      db.User.findOne( {where: { email: email } } ).then(function(dbuser){
        //   if there is no user with the privided email
        if (!dbuser){
            return done(null, false, {message: 'Incorrect Email.'})
        }
        // if there is a user with that email but the password is wrong
        if (!dbuser.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        // if none of this happens, return user
        return user(null, dbuser);
      });
    }
));