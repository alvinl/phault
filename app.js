
/**
 * Dependencies
 */

var requireAllIn = require('./lib/require-all'),
    app          = require('express')(),
    config       = require('./config');

/**
 * Configure app
 */

config.setup(app);

/**
 * Import routes
 */

var routes = requireAllIn(__dirname + '/routes');

/**
 * Routes
 */

app.use('/', routes.index);
app.use('/api', routes.api);

/**
 * Export `app`
 */

module.exports = app;
