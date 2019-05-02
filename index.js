const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries')

const port = process.env.PORT || 3000;

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Node.js, Express, and Postgres API!'
    })
})

app.get('/users', db.getUsers)

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}.`)
})