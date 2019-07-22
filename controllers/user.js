const passport = require('../config/passport');

// GET user/signup
exports.register = (req, res) => {
    res.render('register');
}

// GET /user/login
exports.userLogin = (req, res) => {
    res.render('login');
}

// GET /profile
exports.userProfile = (req, res) => {
<<<<<<< HEAD
    res.render('profile');
    res.redirect('/')
=======
    res.render('profile', {currentUser: req.user});
>>>>>>> 94257e98085c5b1fc65ee70cb05dcb6a52fd303b
}

// GET for /logout
exports.userLogout = (req, res) => {
    req.logout();
    res.redirect('/user/login');
}

// POST /user/signup
exports.signup = passport.authenticate('local-signup', {
    successRedirect: '/profile',
<<<<<<< HEAD
    failureRedirect: '/user/signup'
=======
    failureRedirect: '/user/signup' 
>>>>>>> 94257e98085c5b1fc65ee70cb05dcb6a52fd303b
});

// POST user/login
exports.userSignin = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

