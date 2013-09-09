var MongoClient = require('mongodb').MongoClient;

/*
 * GET Blog.
 */

exports.print = function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function (err, db) {
        if (err) throw err;
        var collection = db.collection('testData');
        collection.find({'name': req.params.id}).toArray(function (err, results) {
            console.log(results);
            res.render('blog', {
                title: 'Blog ' + req.params.id,
                content: results[0].content
            });
            // Let's close the db
            db.close();
        });
    });

};
