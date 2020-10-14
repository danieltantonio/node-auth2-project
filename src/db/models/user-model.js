const db = require('../connect');

module.exports = {
    select,
    selectByName,
    add
}

function select() {
    return db('users');
};

function selectByName(username) {
    return db('users')
    .where('username', '=', username);
};

function add(data) {
    return db('users')
    .insert(data)
}