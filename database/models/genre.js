module.exports = (sequelize, dataTypes) => {

    let alias = 'genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        genre_name: {
            type: dataTypes.STRING
        }

    };

    let config = {
        timestamps: false,
        tableName: 'genre'
    };
 
    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models){
        Genre.hasMany(models.Album,{
            as: "genre",
            foreignKey: "genre_id"
        })
    }
 
    return Genre;
}
