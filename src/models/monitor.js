const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../database/database');


class Monitor extends Model {}
Monitor.init({

    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    program: DataTypes.STRING,
    semester:DataTypes.STRING,
    documentnumber:DataTypes.STRING,
    phone:DataTypes.STRING,
    email:DataTypes.STRING,

    //personal dates
    birthday:DataTypes.DATEONLY,
    address:DataTypes.STRING,
    homenumber:DataTypes.STRING,

    
}, {
    sequelize,
    modelName: "monitor",
    timestamps: false


});

module.exports = Monitor;