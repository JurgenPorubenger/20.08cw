var express = require('express');
var router = express.Router();

let usr = {users: [
    {name:'Petya'},
    {name:'Vasia'},
    {name:'Kolya'},
    {name:'Vania'}
  ]};
/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json(usr);
});

module.exports = router;
