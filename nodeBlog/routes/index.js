var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
var db = mongo.db("mongodb://jonzielen:meow@ds041032.mongolab.com:41032/testdb", {native_parser:true});

var siteTitle = 'Welcome to my FIRST Node/Express/Mongo blog!';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', {
    homepage: true,
    title: siteTitle
  });
});

/* GET Blog Landing Page */
router.get('/blog', function(req, res, next) {
  res.render('blog', {
    title: 'Blog | '+siteTitle
  });
});

/* GET Blog Posts */
router.get('/blog/:id', function(req, res, next) {


var blogPosts = db.collection('blogPosts').find({}, function(err, result) {
    result.each(function(err, blogPosts) {
        return blogPosts;
    });
});

  res.render('blogPost', {
    title: 'Blog | '+siteTitle,
    urlSearch: req.params.id,
    data: blogPosts
  });
});


module.exports = router;
