const db = require('../models');

module.exports = {
    postCreate: function (req, res) {
        db.PostModel
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getPost: function (req, res) {
        db.GetModel
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};