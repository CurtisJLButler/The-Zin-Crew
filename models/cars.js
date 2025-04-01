// models/cars.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


// Define Car model
const Car = sequelize.define('Car', {
    Car_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1886 // First car year
        }
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    Tire_Type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Transmission: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Fuel_Type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Engine: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Seating_Capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    VIN: {
        type: DataTypes.STRING(17),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

// Define Car Colour model
const CarColour = sequelize.define('CarColour', {
    Colour: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Define Car Interior Colour model
const CarInteriorColour = sequelize.define('CarInteriorColour', {
    Interior_Color: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Define associations
Car.hasMany(CarColour, { foreignKey: 'car_id' });
CarColour.belongsTo(Car, { foreignKey: 'car_id' });

Car.hasMany(CarInteriorColour, { foreignKey: 'car_id' });
CarInteriorColour.belongsTo(Car, { foreignKey: 'car_id' });

module.exports = {
    Car,
    CarColour,
    CarInteriorColour
};