var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jogos', { title: 'Jogos' });
});

/* GET home page. */
router.get('/isaac', function(req, res, next) {
  res.render('isaac', { title: 'The Binding of Isaac' });
});

module.exports = router;
