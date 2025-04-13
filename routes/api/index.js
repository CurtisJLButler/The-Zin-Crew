var express = require('express');
var router = express.Router();
//var checkFoo = require('../../middleware/checkFoo')


// var usersRouter = require('./users')
var bookRouter = require('./cars')
const contactRoutes = require('./contact')
const driveRoute = require('./drive')

// router.use('/users', usersRouter)
router.use('/', bookRouter)
router.use('/contact', contactRoutes)
router.use('/drive', driveRoute)
//this causes the middleware to be executed
//router.use(checkFoo)


// router.get('/', (req,res) => {
//     res.send('Welcome to the api')
// })

module.exports = router