var express = require('express');
var router = express.Router();

let usr = {users: [
    {name:'Petya'},
    {name:'Vasia'},
    {name:'Kolya'},
    {name:'Vania'},
    {name:'wwwww'}
  ]};
/* GET users listing. */



router.post('/add', function(req, res, next) {
    usr.users.push(req.body);
    console.log('add');
    res.json(usr);
});
router.post('/delete', function(req, res, next) {
    console.log('delete');
    usr.users.forEach((item, i, arr)=>{
        if (req.body.name===item.name) {
            usr.users.splice(i,1);
        }
    });
    console.log(usr);
    res.json(usr);
});
router.get('/users', function(req, res, next) {
    res.json(usr);
});

module.exports = router;
