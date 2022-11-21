module.exports = (sequelize, dataTypes) => {

    let alias = 'format';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING
        }

    };

    let config = {
        timestamps: false,
        tableName: 'format'
    };
 
    const Format = sequelize.define(alias, cols, config);

    Format.associate = function(models){
        Format.hasMany(models.Album,{
            as: "format",
            foreignKey: "format_id"
        })
    }
 
    return Format;
}
