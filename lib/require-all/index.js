
var path = require('path'),
    fs   = require('fs');

function requireAll (folderName) {

  var filesToRequire = fs.readdirSync(folderName),
      modules        = {};

  filesToRequire.forEach(function (file) {
    
    if (file.match('.js'))
      modules[file.replace('.js', '')] = require(path.resolve(folderName, file));

  });

  return modules;

}

module.exports = requireAll;
