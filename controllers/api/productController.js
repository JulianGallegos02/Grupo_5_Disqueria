const db = require('../../database/models/');
const sequelize = db.sequelize;

const apiProductController = {
    list: (req, res) => {
        db.Album.findAll()
            .then((album) => {
                let infoAlbum = [];

                album.forEach((element) => {

                    infoAlbum.push({
                        id: element.dataValues.id,
                        name: element.dataValues.name,
                        artist: element.dataValues.artist_id,
                        genre: element.dataValues.genre_id,
                        description: element.dataValues.description,
                        label: element.dataValues.label_id,
                        image: element.dataValues.image,
                    });
                });

                let response = {
                    count: album.length,
                    products: infoProducts
                };
                res.json(response);
            })
            .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.users.findByPk(req.params.id, {
            attributes: [
                "id",
                "first_name",
                "last_name",
                "email",
                "image"
            ]
        })
            .then(
                user => {
                    let response = {
                        meta: {
                            status: 200,
                            total: user.length,
                            url: `http://localhost:3000/api/users/`
                        },
                        data: user
                    }
                    res.json(response);
                }
            )
            .catch(error => res.send(error))
    }
}

module.exports = apiProductController;
