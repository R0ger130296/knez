
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('Productos', function(table){
        table.increments('id').primary();
        table.string('nombre');
        table.string('descripcion');
        table.decimal('precio');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('Productos'),
    ])
};
