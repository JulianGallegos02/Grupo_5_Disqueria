const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const Album = db.Album;
const Genre = db.genre;
const Artist = db.artists;
const Label = db.label;


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
    detalleProducto: async function (req, res) {

    /*    let listaArtista = await Artist.findByPk(req.params.id);*/
        
        let discoEncontrado = await Album.findByPk(req.params.id, {
            include: ["artists", "genre","label","format"]
        })

        res.render("productDetail", { style: "productDetail",discoEncontrado});
    },

    carrito: function (req, res) {
        res.render("productCart", { style: "productCart" });
    },

    lista: async function (req, res) {

        let disco = await Album.findAll({
            include: ["artists", "genre","label","format"]
        })       

        res.render("productList", { style: "productList",disco})
    },

    create: async function (req, res) {
        let listaGenero = await Genre.findAll();
        let listaArtistas = await Artist.findAll();
        let listaDiscografica = await Label.findAll();


/*            let nombreArtista = function(){
                if (req.body.artista ==  listaArtistas.forEach(artista => <%= artista.id %>"><%= artista.name %>
                        <% }); %>) {


                }
            }*/



        res.render("productCreate", { style: "productCreate", generos: listaGenero, artistas: listaArtistas,listaDiscografica });
    },

    store:  (req, res) =>{
        

         Album
         .create(
            {
                name: req.body.album,
                artist_id: req.body.artista,
                genre_id: req.body.genero,
                label_id: req.body.discografica,
                image: req.file.filename,
                description: req.body.descripcion,
                price: req.body.precio,
            }
        )

        .then(()=> {
            return res.redirect("/products")
        })
        .catch(error => res.send(error))

    }, 

    edit: function (req, res) {
        let discoId = req.params.id;
        let discoEncontrado = Album.findByPk(discoId)
        let listaGenero = Genre.findAll();
        let listaDiscografica = Label.findAll();
        Promise
        .all([discoEncontrado,listaGenero,listaDiscografica])
        .then(([disco,generos,label]) => {
       
         return res.render(path.resolve(__dirname, '..',"views",'products', "productEdit"), {style: "productEdit", disco,generos,label})})

         .catch(error => res.send(error))
    },

    update:  async function (req, res) {
        try{
            let discoId = req.params.id;

            await Album
            .update({
                name: req.body.album,
                artist_id: req.body.artista,
                genre_id: req.body.genero,
                label_id: req.body.discografica,
                image: req.file.filename,
                description: req.body.descripcion,
                price: req.body.precio,
            },
            {
                where: {id: discoId}
            })
            
            res.redirect("/products");

        } catch {
            error => res.send(error)
        }

    },

    delete: function(req,res){
        let albumId = req.params.id;
        Album
        .destroy({where: {id: albumId}, force: true})
        .then(()=>{
            return res.redirect('/products')})
        .catch(error => res.send(error)) 
    }


}

module.exports = controller;