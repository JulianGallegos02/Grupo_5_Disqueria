const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const Album = db.Album;
const Genre = db.genre;
const Artist = db.artists;



const controller = {
  
    home: async function(req, res) {   

        let disco = await Album.findAll({
            include: ["artists", "genre","label","format"]
        })  

        let discoRandom = await Album.findAll({
            include: ["artists", "genre","label","format"],
            order: sequelize.random()

        }) 

        let ultimoDisco = await Album.findAll({
            include: ["artists", "genre","label","format"],
            order: [['id', 'DESC']],
        }) 

        res.render("index", {style: "styles",disco, discoRandom, ultimoDisco})}

      }

module.exports = controller;