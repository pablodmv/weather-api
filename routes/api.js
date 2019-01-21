var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

/* GET home page. */
router.get('/', apiController.home);

router.get('/weatherStatus', function(req, res, next) {
  res.send({ status: 'Alive!!' });
});

router.post('/weather',apiController.insertWeather);
router.get('/weather',apiController.getWeather);

module.exports = router;
