
var env = process.env;

module.exports = {

  setup: require('./setup'),

  collection: env.collection || 'errors',

  port: env.port || 3000,
  
  db: env.db || 'localhost'

};