const router = require('express').Router();

function fat (n) { // TODO
	var result = 1;
	for (var i = n; i > 0; i--) {
		result *= i;
	}
	return result;
}

function fib (n) { // TODO
	if (n<2){
		return n;
	}
	else{
		return fib(n-1) + fib(n-2)
	}
}

router.post('/fat', (req, res) => {
  const {n} = req.body;

  if (!n) {
    res.sendStatus(400);
  }

  res.json({result: fat(n)});
});

router.post('/fib', (req, res) => {
  const {n} = req.body;

  if (!n) {
    res.sendStatus(400);
  }

  res.json({result: fib(n)});
});

module.exports = router;
