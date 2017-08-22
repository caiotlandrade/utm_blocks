
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('accounts', (table) => {
    table.increments('id').primary().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('account_name').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts');
};
