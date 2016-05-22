var data = require('../resources/posts.json');

module.exports = {
    test:function (req, res) {
        res.send('Hello World!');
    },
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
                id: i,
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
