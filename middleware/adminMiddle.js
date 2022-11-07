function adminMiddleware(req,res,next){

    if(req.session.usuarioLogueado.admin == 1){
        next();
    } else {
        res.redirect("/")
    }
    
}

module.exports = adminMiddleware;