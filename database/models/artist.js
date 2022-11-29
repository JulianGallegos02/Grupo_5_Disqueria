module.exports = (sequelize, dataTypes) => {

    let alias = 'artists';
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
        image: {
            type: dataTypes.TEXT
        },
        description: {
            type: dataTypes.TEXT
        },
    };

    let config = {
        timestamps: false,
        tableName: 'artists'
    };
 
    const Artist = sequelize.define(alias, cols, config);

    Artist.associate = function(models){
        Artist.hasMany(models.Album, {
            as: "albums",
            foreignKey: "artist_id"
        })
    }
 
    return Artist;
}
