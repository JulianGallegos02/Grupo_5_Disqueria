module.exports = (sequelize, dataTypes) => {

    let alias = 'label';
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
        tableName: 'label'
    };
 
    const Label = sequelize.define(alias, cols, config);

    Label.associate = function(models){
        Label.hasMany(models.Album,{
            as: "label",
            foreignKey: "label_id"
        })
    }
 
    return Label;
}