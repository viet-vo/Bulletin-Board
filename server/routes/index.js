// Dependency List
const path = require('path');
const router = require('express').Router();

// Subroutes
//! TODO: Post routes

router.use('/post', postRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;
