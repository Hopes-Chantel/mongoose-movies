var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/movies');
	


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/index', moviesCtrl.index);
// GET /movies/new
router.get('/new', moviesCtrl.new);
// POST /movies
router.post('/', moviesCtrl.create);
	
module.exports = router;
