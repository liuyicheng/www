exports.index = function(req, res) {
  res.send('blog index');
};
exports.read = function(req, res){
  res.send('blog read ' + req.params.name);
};
