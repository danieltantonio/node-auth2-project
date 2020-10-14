const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
module.exports = (req,res,next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                return res.status(401).json({ message: 'You shall not pass!' });
            } else {
                req.jwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'You definitely will not pass!' });
    }
};