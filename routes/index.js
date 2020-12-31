var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
console.log(req.session.idUser)
  res.render('index', { title: 'Tasks-App' });
});

module.exports = router;
