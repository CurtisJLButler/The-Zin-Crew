const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
            min: 1886
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
    },
    Colors: {
        type: DataTypes.TEXT,  // Store as comma-separated string
        allowNull: false,
        get() {
            return this.getDataValue('Colors')?.split(',') || [];
        },
        set(value) {
            this.setDataValue('Colors', Array.isArray(value) ? value.join(',') : value);
        }
    },
    Interior_Colors: {
        type: DataTypes.TEXT,  // Store as comma-separated string
        allowNull: false,
        get() {
            return this.getDataValue('Interior_Colors')?.split(',') || [];
        },
        set(value) {
            this.setDataValue('Interior_Colors', Array.isArray(value) ? value.join(',') : value);
        }
    }
}, {
    timestamps: false
});

module.exports = { Car };
