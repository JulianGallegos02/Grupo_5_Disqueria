const db = require('../../database/models/');
const sequelize = db.sequelize;

const apiProductController = {
    list: (req, res) => {
        console.log("estamos ingresando al metodo")
        db.Album.findAll({ include: { all: true, nested: true }})

            .then((album) => {
                console.log (album)
                let infoAlbum = [];

                album.forEach((element) => {

                    infoAlbum.push({
                        id: element.dataValues.id,
                        name: element.dataValues.name,
                        artist: element.dataValues.artists.name,
                        genre: element.dataValues.genre.genre_name,
                        description: element.dataValues.description,
                        label: element.dataValues.label.name,
                        image: `http://localhost:3000/images/cover/${element.dataValues.image}` 
                    });
                });

                let response = {
                    count: album.length,
                    products: infoAlbum
                };
                res.json(response);
            })
            .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Album.findByPk(req.params.id, {
         include: { all: true, nested: true }
        })
            .then(
                album => {
                    let response = {
                        meta: {
                            status: 200,
                            url: `http://localhost:3000/api/products/`
                        },
                        data: {
                                id: album.id,
                                name: album.name,
                                artist: album.artists.name,
                                genre: album.genre.genre_name,
                                description: album.description,
                                label: album.label.name,
                                image: `http://localhost:3000/images/cover/${album.image}`
                        }
                    }
                    res.json(response);
                }
            )
            .catch(error => res.send(error))
    }
}

module.exports = apiProductController;
