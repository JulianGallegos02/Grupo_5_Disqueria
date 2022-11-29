module.exports = (sequelize, dataTypes) => {

    let alias = 'Album';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        tableName: "album",
        timestamps: false
    };
 
    const Album = sequelize.define(alias, cols, config);

    Album.associate = (models) =>{
        Album.belongsTo(models.artists,{
            as: "artists",
            foreignKey: "artist_id"
        })
        Album.belongsTo(models.genre,{
            as: "genre",
            foreignKey: "genre_id"
        })
        Album.belongsTo(models.label,{
            as: "label",
            foreignKey: "label_id"
        })
        Album.belongsTo(models.format,{
            as: "format",
            foreignKey: "format_id"
        })
    }
 
    return Album;
}
