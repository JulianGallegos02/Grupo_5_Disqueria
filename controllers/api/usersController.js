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
                        detail: `http://localhost:3000/api/users/${element.dataValues.id}`
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
        db.user.findByPk(req.params.id)
            .then(
                user => {
                    let response = {
                        meta: {
                            status: 200,
                            total: users.length,
                            url: 'api/users/:id'
                        },
                        data: users
                    }
                    res.json(response);
                }
            )
            .catch(error => res.send(error))
    }
}

module.exports = apiUsersController;