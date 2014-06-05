var path = require('path');
exports.index = function(req,res){
  var html = path.normalize('./index.html');
  res.sendfile(html);
}