
exports.index = function (req, res) {
  
  return res.render('index', { title: 'Phault',
                              subtitle: 'Recent logs',
                              controller: 'IndexCtrl' });

};

exports.user = function (req, res) {
  
  return res.render('index', { title: 'Phault | User ' + req.params.user,
                              subtitle: 'User ' + req.params.user,
                              controller: 'UserCtrl' });

};