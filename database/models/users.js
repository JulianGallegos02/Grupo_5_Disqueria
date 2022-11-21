module.exports = (sequelize, dataTypes) => {

    let alias = 'users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(30)
        },
        last_name: {
            type: dataTypes.STRING(30)
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.TEXT
        }
    };
    let config = {
        timestamps: false,
        tableName: 'users'
    };
 
    const User = sequelize.define(alias, cols, config);

 
    return User;
}
