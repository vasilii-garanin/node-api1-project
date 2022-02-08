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

server.get('/api/users/:id', (req, res) =>
{
    User.findById(req.params.id)
        .then(user =>
        {
            if (!user)
            {
                res.status(404).json({
                    message: 'The user with the specified ID does not exist'
                });
            }
            res.json(user);
        })
        .catch(err =>
        {
            res.status(500).json({
                message: 'The user information could not be retrieved',
                err: err.message,
                stack: err.stack
            });
        });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
