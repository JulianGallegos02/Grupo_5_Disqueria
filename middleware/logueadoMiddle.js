function logueadoMiddleware(req,res,next){


    if(req.session.usuarioLogueado){
        res.redirect("/")
    } else {
        next();
    }
    
}


module.exports = logueadoMiddleware;