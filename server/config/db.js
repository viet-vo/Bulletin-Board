require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.set('useCreateIndex', true);

mongoose.set(uri, {
    useNewUrlParser: true
}).then(() => {
        console.log('Connected to MLab DB');

    },
    err => {
        /** handle initial connection error */
        console.log('error connecting to Mongo: ')
        console.log(err);
    }
);