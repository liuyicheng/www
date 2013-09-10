exports.blog = {
    essay: {
        write: function(req, res) {
            console.log(req.body.title);
            res.send('mongo blog essay write');
        }
    }
};
