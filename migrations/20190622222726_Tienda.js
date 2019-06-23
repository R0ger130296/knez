
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('Tienda', function(table){
          table.increments('id').primary();
          table.integer('idProducto').references('id').inTable('Productos');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('Tienda'),
    ])
};
