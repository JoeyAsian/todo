const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

// telling passport we want to use local strategy, in other words we want to use
// email and password
// for signing in
passport.use(new LocalStrategy(
    {  usernameField: 'email' },
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

// for when a user signs up
passport.use('local-signup', new LocalStrategy(
    {  usernameField: 'email',
<<<<<<< HEAD
       passReqToCallBack: true }, //allow us to use the entire request coming fron our app
    function(email, password, done) {
=======
       passReqToCallback: true }, // allow us to use the entire request coming from our app},
    function(req, email, password, done) {
>>>>>>> 94257e98085c5b1fc65ee70cb05dcb6a52fd303b
      db.User.findOne( { where: { email: email } } ).then( function(dbuser){
        // to verify that the email is not in use
        if (dbuser) {
            return done(null, false, { message: 'Email is already taken.' } );
<<<<<<< HEAD
        }else {
            // add my user to my database
=======
        } else  {
            // add user to my database
>>>>>>> 94257e98085c5b1fc65ee70cb05dcb6a52fd303b
            db.User.create({
                email: email , 
                password: password,
                name: req.body.name
            }).then(function (newUser) {
                if (!newUser){
                    return done(null, false)
                }
<<<<<<< HEAD

                if (newUser){
                    return done(null, newUser)
                }

            }).catch(function (err) {
                console.log(err);
                res.json(err);
            })
            return done(null, false, { message: 'Incorrect password.' } );
=======
                if (newUser){
                    return done(null, newUser)
                }
            }).catch(function (err) {
                console.log(err);
                res.json(err);
            })    
>>>>>>> 94257e98085c5b1fc65ee70cb05dcb6a52fd303b
        }
      });
    }
));



<<<<<<< HEAD
=======



>>>>>>> 94257e98085c5b1fc65ee70cb05dcb6a52fd303b
// to authenticate users to a cookie we must serialize the user session
passport.serializeUser(function(user, done) {
    done(null, user);
});
  
// following request need there session to be deserialize 
passport.deserializeUser(function(user, done) {
    done(null, user )
});

// exporting passport for our app to use it
module.exports = passport;