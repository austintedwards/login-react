var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Login Server'
    });
});

router.get('/name/:name', function(req, res, next) {
  let name = req.params.name;
  knex('login')
  .where('name', name)
  .then(function(data){
    console.log(data)
  })
});


module.exports = router;
