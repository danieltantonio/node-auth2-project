
exports.up = function(knex) {
  knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username')
      .notNullable()
      .unique();
      tbl.string('password')
      .notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('users')
};
