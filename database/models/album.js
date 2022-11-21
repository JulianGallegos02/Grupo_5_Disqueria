module.exports = (sequelize, dataTypes) => {

    let alias = 'albums';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING
        },
        artist_id: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        label_id: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.TEXT
        },
        description: {
            type: dataTypes.TEXT
        },
        price: {
            type: dataTypes.INTEGER
        },
        format_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        timestamps: false,
        tableName: 'albums'
    };
 
    const Album = sequelize.define(alias, cols, config);

    Album.associate = function(models){
        Album.belongsTo(models.Artist,{
            as: "artists",
            foreignKey: "artist_id"
        })
        Album.belongsTo(models.Genre,{
            as: "genre",
            foreignKey: "genre_id"
        })
        Album.belongsTo(models.Label,{
            as: "label",
            foreignKey: "label_id"
        })
        Album.belongsTo(models.Format,{
            as: "format",
            foreignKey: "format_id"
        })
    }
 
    return Album;
}
