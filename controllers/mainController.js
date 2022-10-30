const fs = require("fs");
const path = require("path");

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/products.json"));
    const data = JSON.parse(jsonData);
    return data
};

function create(data) {
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString)
};


const controller = {
  
    home: function(req, res) {     
        const data = findAll();
      
      
        res.render("index", {style: "styles", products: data });
      },

}

module.exports = controller;