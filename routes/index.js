var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/our-life', function(req, res, next) {
  res.render('our-life', { title: 'Express' });
});

router.get('/our-life-article', function(req, res, next) {
  res.render('our-life-article', { title: 'Express' });
});

router.get('/promotion-event', function(req, res, next) {
  res.render('promotion-event', { title: 'Express' });
});
router.get('/promotion-magazine', function(req, res, next) {
  res.render('promotion-magazine', { title: 'Express' });
});

module.exports = router;
