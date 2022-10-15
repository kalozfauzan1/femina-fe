var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/our-life', function(req, res, next) {
  res.render('our-life', { title: 'Express' });
});

module.exports = router;
