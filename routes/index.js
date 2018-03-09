var express = require('express');
var connect = require('../utils/sqlConnect');
var config = require('../config');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  connect.query('SELECT * FROM movies', (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      res.render('home', {
        title: 'Video Preview App',
        message: 'Welcome to my Video Preview App',
        videoData : result,
      });
    }
  });
});

module.exports = router;
