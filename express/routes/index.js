var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Login Server'});
});

router.get('/name/:name', function(req, res, next) {
  let name = req.params.name;
  knex('login').where('name', name).then(function(data) {
    // res.send(data);
    res.send(data)
    console.log("working")
    // console.log(data)
  })
});

router.get('/email/:email', function(req, res, next) {
  let email = req.params.email;
  knex('login').where('email', email).then(function(data) {
    res.send(data);
    console.log("email", data)
  })
});

router.post('/signup', function(req, res, next) {
  let user = req.body
  console.log(user)
  knex('login')
  .insert({name: user.name, email: user.email, password: user.password})
  .returning('id')
  .then(function(ans) {
    res.send(ans);
  })
  .finally(function() {
    });
});

module.exports = router;
