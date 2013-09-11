var db = require('../model/db'),
    blog = db.blog;

exports.index = function(req, res) {
  res.send('blog index');
};
exports.write = function(req, res) {
  res.render('blog/write', { title: 'Express' });
};
exports.read = function(req, res){
  res.send(123);
  /*
  blog.essay.read(req.params.id, function (essayData) {
    res.send(123);
    /*
    res.render('blog/essay', {
      title: essayData.title,
      body: essayData.body
    });
  });
    */
};
