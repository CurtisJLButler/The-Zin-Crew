var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('testing...')
  res.render('index', { title: 'INTET2005 - Web App Programming' });
});

module.exports = router;
