const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Drive = sequelize.define('Drive', {
  First_Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Last_Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  City: {
    type: DataTypes.STRING
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
  testDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  testTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  Comments: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,

});

module.exports = { Drive };
