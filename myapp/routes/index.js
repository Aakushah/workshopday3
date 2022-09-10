var express = require('express');
var router = express.Router();

var mysql=require('mysql');
// const Connection = require('mysql/lib/Connection');
var connection= mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dellg3'
});

connection.connect(function(err){
  if(!err)
  {
    console.log('err')
    console.log("connection is established");
  }
  else
  {
    console.log("connection is failed");
  }

});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.get('/header', function(req, res, next) {
  res.render('header', { title: 'Express' });
});
router.get('/templete', function(req, res, next) {
  res.render('templete', { title: 'Express' });
});
router.post('/processing', function(req, res, next) {
  console.log(req.body)
  var a=req.body.txt1;
  var b=req.body.txt2;

  connection.query("insert into customer(fname,lname) values(?,?)",[a,b],
  function(err,result,field)
  {
  res.render('ans',{mya:a,myb:b});
  });


});


module.exports = router;
