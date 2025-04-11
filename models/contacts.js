const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
    First_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Last_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Provice:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Comments:{
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    timestamps: false
})

module.exports = { Contact };

