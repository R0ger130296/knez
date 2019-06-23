
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('Servicios', function(table){
          table.increments('id');
          table.string('nombre');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('Servicios'),
    ])
};
