const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    topic: {
        type: String,
        require: true,
    },
    detail: {
        type: String,
        require: true,
    },
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;