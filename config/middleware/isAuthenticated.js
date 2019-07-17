// middleware for restricting route access
module.exports = (req, res, next) => {
<<<<<<< HEAD
    // if the user is logged in, continue the restricted route
    if(req.user){
        return next();
    }

    return res.redirect('/user/login')
}
=======
    // if the user is logged in, continue to the restricted route
    if(req.user){
        return next();
    } 

    return res.redirect('/user/login');
};
>>>>>>> 380ee75f960a42f98f00122865d13f157efe5bfb
