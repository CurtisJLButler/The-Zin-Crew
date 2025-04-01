# The-Zin-Crew

## Backend doc
- models/car.js
- api/cars.js
- config/database.js

in app.js the app connects with  
`// SQL Database connection setup
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // or 'postgres'
    port: process.env.DB_PORT || 3306,
    logging: false
  }
);`
