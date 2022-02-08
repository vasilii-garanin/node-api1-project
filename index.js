const server = require('./api/server');

const PORT = 9000;

// START YOUR SERVER HERE
server.listen(PORT, () =>
{
    console.log(`server listening on port ${PORT} `);
});