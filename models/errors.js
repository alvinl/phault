
module.exports = function (collectionName) {
  
  var mongoose   = require('mongoose'),
      Schema     = mongoose.Schema;

  var errorSchema = new Schema({

    timeStamp: Date,
    message:   String,
    stack:     String,
    user:      String,
    method:    String,
    path:      String,
    headers:   String,
    errName:   String

  });

  return mongoose.model(collectionName, errorSchema);

};