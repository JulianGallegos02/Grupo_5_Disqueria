const controller = {
    home: function(req, res) {       
        res.render("index", {style: "styles"});
      },

}

module.exports = controller;