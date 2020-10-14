const express = require('express');
const server = express();
const jwt = require('jsonwebtoken');

const token = jwt.sign({ username: 'Hello', password: "goodbye" }, 'This is a secret', { expiresIn: '1hr' });

console.log(token)

module.exports = server;