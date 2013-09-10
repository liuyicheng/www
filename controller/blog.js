var lang = require('../model/lang'),
    fs = require('fs'),
    markdown = lang.markdown;

exports.index = function(req, res) {
  res.send('blog index');
};

exports.print = function(req, res){
  var name = req.params.name,
      url = '/home/liuyicheng/workspace/www/static/blog/' + name + '.md';


  res.send(markdown.toHTML(fs.readFileSync(url, 'utf-8')));
};
