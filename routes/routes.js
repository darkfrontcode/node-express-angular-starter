var express     = require('express'),
    router      = express.Router(),
    actions     = require('./actions');

//routes
router.get('/', actions.index);
router.get('/partials/:name', actions.partials);

//api
router.get('/posts', actions.posts);

router.get('/post/:id', actions.post);
router.post('/post', actions.add);
router.put('/post/:id', actions.edit);
router.delete('/post/:id', actions.delete);

module.exports = router;
