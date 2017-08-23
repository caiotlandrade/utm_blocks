
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('urls', (table) => {
      table.increments('id').primary();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.string('original_url').notNullable();
      table.string('campaign_source').notNullable();
      table.string('campaign_medium').notNullable();
      table.string('campaign_name');
      table.string('campaign_term');
      table.string('campaign_content');
      table.string('final_url');
      table.string('shortened_url');
      table.integer('account_id').notNullable();
      table.integer('user_id').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('urls');
  };
  