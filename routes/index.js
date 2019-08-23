var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Список юзеров', mainDisplay: 'display:block', display: 'display:none' });
});
router.get('/add', function(req, res, next) {
  res.render('index', { title: 'Добавить юзера', mainDisplay: 'display:none', display: 'display:block', btnDisplay: 'display:block', btn2Display:'display:none'});
});
router.get('/delete', function(req, res, next) {
  res.render('index', { title: 'Удалить юзера', mainDisplay: 'display:none', display: 'display:block', btnDisplay: 'display:none', btn2Display:'display:block'});
});

module.exports = router;
