const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const Album = db.Album;
const Genre = db.genre;
const Artist = db.artists;

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
  
    home: async function(req, res) {   

        let disco = await Album.findAll({
            include: ["artists", "genre","label","format"]
        })  

        res.render("index", {style: "styles",disco})}

      }

module.exports = controller;