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
router.post('/add', function(req, res, next) {
    usr.users.push(req.body);
    console.log(usr);
    res.json(usr);
});
router.post('/delete', function(req, res, next) {
    usr.users.forEach((item, i, arr)=>{
        if (req.body.name===item.name) {
            usr.users.splice(i,1);
        }
    });
  res.json(usr);
});

module.exports = router;
