var markdown = require('../markdown').markdown;

exports.reg = {
  trim: function (string) {
    return string.trim();
  },
  space: function (string) {
    return string.trim().replace(/ +/g, ' ');
  },
  titleToId: function (string) {
    return string.trim().replace(/ +/g, '-');
  }
};

exports.markdown = markdown;
