const router = require('express').Router();
const postController = require('../../controller/controller');

router.route('/')
    .post(postController.postCreate);

module.exports = router;