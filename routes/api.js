var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

/* GET home page. */
router.get('/', apiController.home);

router.get('/weather', function(req, res, next) {
  res.send({ status: 'Alive!!' });
});

module.exports = router;
