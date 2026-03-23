var express = require('express');
var router = express.Router();

const filmes = [
  {
    slug: 'fight_club',
    titulo: 'Clube da Luta',
    tag: 'Filme em destaque',
    resumo:
      'Em uma fase de vazio pessoal, um homem conhece uma figura carismatica e impulsiva que muda completamente sua rotina.',
    descricao:
      'Sem spoilers: o filme mistura critica social, identidade e um ritmo intenso.',
    avaliacao: 4.5,
    poster: '/images/fight-club-poster.svg',
    altPoster: 'Poster estilizado do filme Clube da Luta'
  }
];

/* GET filmes list page. */
router.get('/', function(req, res, next) {
  res.render('filmes', {
    title: 'Filmes',
    filmes: filmes,
    destaque: filmes[0]
  });
});

/* GET movie detail page. */
router.get('/fight_club', function(req, res, next) {
  const filme = filmes.find((item) => item.slug === 'fight_club');
  res.render('fight_club', {
    title: filme.titulo,
    filme: filme
  });
});

module.exports = router;