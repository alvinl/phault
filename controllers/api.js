
var mongoose  = require('mongoose'),
    config    = require('../config'),
    ErrorLogs = mongoose.models[config.collection];

exports.errors = function (req, res, next) {
  
  ErrorLogs
    .find(null, { __v: 0 })
    .limit(10)
    .sort({ timeStamp: (req.query.sort === 'oldest') ? 1 : -1 })
    .exec(function (err, errLogs) {
      
      if (err) return next(err);

      return res.json(errLogs);

    });

};

exports.user = function (req, res, next) {
  
  ErrorLogs
    .find({ user: req.params.user }, { __v: 0 })
    .limit(10)
    .sort({ timeStamp: (req.query.sort === 'oldest') ? 1 : -1 })
    .exec(function (err, errLogs) {
      
      if (err) return next(err);

      return res.json(errLogs);

    });

};