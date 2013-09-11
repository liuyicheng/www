var db = require('./db'),
    lang = require('./lang'),
    reg = lang.reg;

exports.blog = {
  essay: {
    write: function (req, res) {
      var title = req.body.title,
          body = req.body.body;

      var essayData = {
        'id': reg.titleToId(title),
        'title': reg.space(title),
        'body': reg.trim(body)
      };
      db.blog.essay.write(essayData);
      res.send('mongo blog essay write');
    }
  }
};
