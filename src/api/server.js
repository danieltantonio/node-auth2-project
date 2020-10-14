const express = require('express');
const server = express();

const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const validate = require('./middleware/valid-mw');
const accessToken = require('./middleware/token-mw');

server.use(express.json());

server.use('/api/register', userRouter);
server.use('/api/login', validate, loginRouter);
server.use('/api/users', accessToken, userRouter);

module.exports = server;