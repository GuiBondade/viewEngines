var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('musicas', { title: 'Músicas' });
});

/* GET home page. */
router.get('/azul', function(req, res, next) {
  res.render('azul', { title: 'Azul - Gal Costa' });
});

module.exports = router;
