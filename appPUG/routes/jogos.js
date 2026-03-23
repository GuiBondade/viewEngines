var express = require('express');
var router = express.Router();

const jogos = [
  {
    slug: 'isaac',
    nome: 'The Binding of Isaac',
    etiqueta: 'Destaque indie',
    subtitulo:
      'The Binding of Isaac e um roguelike de acao com salas geradas de forma procedural e foco em combinacoes de itens.',
    descricao:
      'A progressao incentiva tentativa e erro, com partidas diferentes e desafios crescentes.',
    imagem:
      'https://static.wikia.nocookie.net/p__/images/1/12/Isaac_.png/revision/latest?cb=20180611062057&path-prefix=protagonist',
    alt: 'Capa com o personagem principal Isaac',
    fonteImagem: 'Heroes Wiki - Fandom',
    linkOficial:
      'https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/'
  }
];

/* GET jogos page. */
router.get('/', function(req, res, next) {
  const destaque = jogos[0];

  res.render('jogos', {
    title: 'Jogos',
    jogos: jogos,
    destaque: destaque
  });
});

/* GET game detail by slug. */
router.get('/:slug', function(req, res, next) {
  const jogo = jogos.find((item) => item.slug === req.params.slug);

  if (!jogo) {
    return res.status(404).send('Jogo nao encontrado');
  }

  res.render('isaac', {
    title: jogo.nome,
    jogo: jogo
  });
});

module.exports = router;
