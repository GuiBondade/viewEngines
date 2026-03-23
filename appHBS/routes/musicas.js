var express = require('express');
var router = express.Router();

const musicas = [
  {
    slug: 'azul',
    titulo: 'Azul - Gal Costa',
    etiqueta: 'Classico da MPB',
    resumo:
      '"Azul", na voz de Gal Costa, transmite sensibilidade e uma atmosfera contemplativa.',
    descricao:
      'A interpretacao valoriza emocao, timbre e intensidade.',
    capa: '/images/azul-capa.svg',
    alt: 'Capa artistica inspirada na musica Azul de Gal Costa',
    botaoBusca: 'https://www.youtube.com/results?search_query=Gal+Costa+Azul'
  }
];

/* GET musicas page. */
router.get('/', function(req, res, next) {
  res.render('musicas', {
    title: 'Músicas',
    musicas: musicas,
    destaque: musicas[0]
  });
});

/* GET song detail page. */
router.get('/azul', function(req, res, next) {
  const musica = musicas.find((item) => item.slug === 'azul');
  res.render('azul', {
    title: musica.titulo,
    musica: musica
  });
});

module.exports = router;
