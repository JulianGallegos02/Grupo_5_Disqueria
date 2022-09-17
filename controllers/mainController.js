const controller = {
    home: function(req, res) {       
        res.render("index", {style: "styles"});
      },

    login: function(req, res){
        res.render("login", {style: "login"});
    },

    register: function(req, res){
        res.render("register", {style: "register"});
    },

}

module.exports = controller;