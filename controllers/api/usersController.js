const db = require('../../database/models/');
const sequelize = db.sequelize;

const apiUsersController = {
    list: (req, res) => {
        db.users.findAll()
            .then((users) => {
                let infoUsers = [];

                users.forEach((element) => {

                    infoUsers.push({
                        id: element.dataValues.id,
                        name: element.dataValues.first_name + " " + element.dataValues.last_name,
                        email: element.dataValues.email,
                        detail: `http://localhost:3000/api/users/${element.dataValues.id}`,
                        image: `http://localhost:3000/images/users/${element.dataValues.image}`
                    });
                });

                let response = {
                    count: users.length,
                    users: infoUsers
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
                //`http://localhost:3000/images/users/${element.dataValues.image}`//
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

module.exports = apiUsersController;