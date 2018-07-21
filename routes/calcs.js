const router = require('express').Router();

function fat (n) { // TODO
  return n;
}

router.post('/fat', (req, res) => {
  const {n} = req.body;

  if (!n) {
    res.sendStatus(400);
  }

  res.json({result: fat(n)});
});

module.exports = router;
