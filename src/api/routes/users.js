const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../../db/models/user-model');
const { salt } = require('../config');

router.get('/', (req,res) => {
    db
    .select()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    db
    .add(req.body)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;