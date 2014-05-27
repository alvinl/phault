
/**
 * Dependencies
 */

var controller = require('../controllers/api'),
    express    = require('express'),
    router     = express.Router();


/**
 * Routes handler
 */

router
  .get('/errors', controller.errors)
  .get('/user/:user', controller.user);


/**
 * Export `router`
 */

module.exports = router;
