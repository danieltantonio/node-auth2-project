const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

router.post('/', (req,res) => {
    const token = jwt.sign(req.user, jwtSecret, { expiresIn: '10m' });
    res.status(202).json({ token });
});

module.exports = router;