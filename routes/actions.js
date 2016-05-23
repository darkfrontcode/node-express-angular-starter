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

        var posts = data.posts.reduce(function(all, item, index){
            item['intro'] = item.text.substr(0, 50) + '...';
            all.push(item);
            return all;
        }, []);

        res.json({ posts: posts });
    },
    post: function (req, res) {
        var id = req.params.id;

        var post = data.posts.filter(function(post){
            return post.id == id
        });

        res.json({ post: post[0] });
    },
    add: function (req, res) {

        req.body['id']=data.posts.length+1;
        data.posts.push(req.body);

        res.json(req.body);
    },
    edit: function (req, res) {
        var id = req.params.id;

        data.posts = data.posts.reduce(function(all, item, index){
            if(item.id==id) item = req.body
            all.push(item);
            return all;
        }, []);

        res.json(true);
    },
    delete: function (req, res) {
        var id = req.params.id;

        data.posts = data.posts.filter(function(post){
            return post.id != id
        });

        res.json(true);
    }
}
