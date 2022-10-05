const controller = {

    login: function(req, res){
        res.render("login", {style: "login"});
    },

    register: function(req, res){
        res.render("register", {style: "register"});
    },

}

module.exports = controller;