exports.index = function(req, res) {
  res.send('blog index');
};
exports.print = function(req, res){
  res.send('blog print ' + req.params.title);
};
exports.write = function(req, res) {
  res.render('blog/write', { title: 'Express' });
};
