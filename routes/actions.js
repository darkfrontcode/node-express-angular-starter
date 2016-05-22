var data = require('../resources/posts.json');

module.exports = {
    index: function(req, res){
        res.render('index');
    },
    partials: function (req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    },
    posts:function (req, res) {
        var posts = [];
        data.posts.forEach(function (post, i) {
            posts.push({
                id: post.id,
                title: post.title,
                text: post.text.substr(0, 50) + '...'
            });
        });
        res.json({
            posts: posts
        });
    },
    post: function (req, res) {
        var id = req.params.id;
        if (id >= 0 && id < data.posts.length) {
            res.json({
                post: data.posts[id]
            });
        } else {
            res.json(false);
        }
    },
    add: function (req, res) {
        req.body['id']=data.posts.length+1;
        data.posts.push(req.body);
        res.json(req.body);
    },
    edit: function (req, res) {
        var id = req.params.id;

        if (id >= 0 && id < data.posts.length) {
            data.posts[id] = req.body;
            res.json(true);
        } else {
            res.json(false);
        }
    },
    delete: function (req, res) {
        var id = req.params.id;

        if (id >= 0 && id < data.posts.length) {
            data.posts.splice(id, 1);
            res.json(true);
        } else {
            res.json(false);
        }
    }
}
