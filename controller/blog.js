var lang = require('../model/lang'),
    fs = require('fs'),
    path = require('path'),
    markdown = lang.markdown;

exports.index = function (req, res) {
  var files = fs.readdirSync('./static/blog/'),
      blogs = [];
  files.forEach(function (file) {
    if (path.extname(file) === '.md') {
      blogs.push(path.basename(file, '.md'));
    }
  });
  res.render('blogs', {
    'blogs': blogs
  });
};

exports.print = function (req, res) {
  var name = req.params.name,
      url = './static/blog/' + name + '.md',
      file = fs.readFileSync(url, 'utf-8'),
      blog = markdown.toHTML(file);
  res.render('blog', {
    'blog': blog
  });
};
