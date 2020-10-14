const db = require('../../db/models/user-model');
const bcrypt = require('bcryptjs');

module.exports = (req,res,next) => {
    db
    .selectByName(req.body.username)
    .then(user => {
        if(!user.length) {
            return res.status(400).json({ message: 'You shall not pass!' });
        }

        if(bcrypt.compareSync(req.body.password, user[0].password)) {
            req.user = user[0];
            next();
        } else {
            res.status(400).json({ message: 'You shall not pass!' });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
}