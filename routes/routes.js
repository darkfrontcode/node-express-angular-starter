var express     = require('express'),
    router      = express.Router(),
    actions     = require('./actions');

router.get('/api/posts', actions.posts);
router.get('/api/post/:id', actions.post);
router.post('/api/post', actions.add);
router.put('/api/post/:id', actions.edit);
router.delete('/api/post/:id', actions.delete);

module.exports = router;
