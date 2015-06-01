var express = require('express');
var router = express.Router();

var siteTitle = 'Welcome to my FIRST Node/Express/Mongo blog!';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', {
    homepage: true,
    title: siteTitle
  });
});

/* GET Blog Page */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog | '+siteTitle });
});

module.exports = router;
