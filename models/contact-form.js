const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
  First_Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Last_Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  City: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Email_Address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Comments: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = { Contact };
