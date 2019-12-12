// Dependency List
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;

// Middleware
mongoose.connect(uri, {
    useNewUrlParser: true
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Conditional Middleware
const db = mongoose.connection;
db.on('error', function () {
    console.log('error connecting to Mongo')
});
db.once('open', function () {
    console.log('connected to MLab')
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})