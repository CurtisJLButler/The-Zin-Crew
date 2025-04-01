# The-Zin-Crew

## Backend doc
- models/car.js
- api/cars.js
- config/database.js

in config/database.js the app connects with  
`// SQL Database connection setup`  
`const sequelize = new Sequelize(`  
`  process.env.DB_NAME,`  
`  process.env.DB_USER,`  
`  process.env.DB_PASSWORD,`  
`  {`  
`    host: process.env.DB_HOST,`  
`    dialect: 'mysql', // or 'postgres'`  
`    port: process.env.DB_PORT || 3306,`  
`    logging: false`  
`  }`  
`);`

The connection options are stored in the **.env**

The model uses the config/database.js connection by first

importing the file  
`const sequelize = require('../config/database');`  

and then this import is used as the object the the model works on  
`const Car = sequelize.define('Car', {`