
/**
 * Dependencies
 */

var controller = require('../controllers/pages'),
    express    = require('express'),
    router     = express.Router();


/**
 * Routes handler
 */

router
  .get('/', controller.index)
  .get('/user/:user', controller.user);


/**
 * Export `router`
 */

module.exports = router;
