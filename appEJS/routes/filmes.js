var express = require('express');
var router = express.Router();

/* GET filmes list page. */
router.get('/', function(req, res, next) {
  res.render('filmes', { title: 'Filmes' });
});

/* GET movie detail page. */
router.get('/fight_club', function(req, res, next) {
  res.render('fight_club', {
    title: 'Clube da Luta',
    avaliacao: 4.5
  });
});

module.exports = router;