
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('websites', (table) => {
      table.increments('id').primary().notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.string('websites').notNullable();
      table.integer('account_id').notNullable();
      table.integer('user_id').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('websites');
  };
  