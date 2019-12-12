const router = require('express').Router();
const postController = require('../../controller/controller');

router.route('/')
    .post(postController.postCreate)
    .get(postController.getPost)

module.exports = router;