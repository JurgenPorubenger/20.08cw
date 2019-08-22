var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Список юзеров', divClass: 'usersList' });
});
router.get('/add', function(req, res, next) {
  res.render('index', { title: 'Добавить юзера', divClass: 'add_userForm' });
});
router.get('/delete', function(req, res, next) {
  res.render('index', { title: 'Удалить юзера', divClass: 'delete_userForm'});
});

module.exports = router;
