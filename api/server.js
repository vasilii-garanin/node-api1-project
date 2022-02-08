// BUILD YOUR SERVER HERE
const express = require('express');

const server = express();

server.use(express.json());

const User = require('./users/model');

server.get('/api/users', (req, res) =>
{

    User.find()
        .then(users =>
        {
            res.json(users);
        })
        .catch(err =>
        {
            res.status(500).json({
                message: 'The users information could not be retrieved',
                err: err.message,
                stack: err.stack
            });
        });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
