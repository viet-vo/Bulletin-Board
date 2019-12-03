// Dependency List
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
// const mongoDB = require('./config/db');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Conditional Middleware
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// app.use(routes);
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})