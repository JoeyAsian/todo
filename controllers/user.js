

//GET for user/signup
exports.register = (req, res) => {
    res.render('register');
}

// GET for /user/login
exports.userLogin = (req, res) => {
    res.render('login');
}

// GET for /profile
exports.userProfile = (req, res) => {
    res.render('profile');
}

// GET for /logout
exports.userLogout = (req, res) => {
    res.redirect('/');
}
 
// POST for /user/signup
exports.signup = (req, res) => {
    req.context.db.User.create({
        email: req.body.email,
        password: req.body.password,
    }).then(function () {
        res.redirect('/profile')
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}

exports.userSignin = (req, res) => {
    
}