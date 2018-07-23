const router = require('express').Router();

router.get('/read', function(req, res) {
  global.db.findAll((e, docs) => {
      if(e) { return console.log(e); }
      //res.render('db', { title: 'Lista de livros', docs: docs });
      res.status(200).send({message: "Registros encontrados", docs: docs});
  })
})

router.post('/create', function(req, res) {
  var reg = req.body;
  global.db.insert(reg, (err, result) => {
          if(err) { 
          	res.json({message: "erro ao inserir"});
          	return console.log(err); 
          }
          res.json({message: "registro inserido"});
      })
})

router.post('/update/:id', function(req, res) {
  var id = parseInt(req.params.id);
  var nome = req.body.nome;
  global.db.update(id, {nome}, (e, result) => {
        if(e) { 
        	res.json({message: "erro"});
        	return console.log(e); 
        }
        res.json({message: "registro alterado"});
    });
});

module.exports = router;