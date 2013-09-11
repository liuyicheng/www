var mongodb = require('mongodb');

exports.blog = {
  essay: {
    write: function (essayData) {
      mongo.insert('blog', 'essay', essayData, function (status) {
        console.log(status.message);
      });
    },

    read: function (essayId, callback) {
      mongo.find('blog', 'essay', essayId, callback);
    }
  }
};

var mongo = {
  insert: function (dbName, collectionName, essayData, callback) {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect('mongodb://localhost:27017/' + dbName, function(err, db) {
      if(err) throw err;

      var collection = db.collection(collectionName);
      collection.insert(essayData, function (err, docs) {
        callback({
          message: docs
        });
        db.close();
      });
    });
  },
  find: function (dbName, collectionName, essayId, callback) {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect('mongodb://localhost:27017/' + dbName, function(err, db) {
      if(err) throw err;

      var collection = db.collection(collectionName);
      collection.find({
        id: essayId
      }).toArray(function (err, essayDatas) {
        callback({
          essayData: essayDatas[0]
        });
        db.close();
      });
    });
  }
}
