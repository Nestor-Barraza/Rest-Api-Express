const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../database/database');


class Monitorias extends Model {}
Monitorias.init({

    class: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    classroom:DataTypes.STRING
    
    
}, {
    sequelize,
    modelName: "monitorias",
    timestamps: false


});

module.exports = Monitorias;