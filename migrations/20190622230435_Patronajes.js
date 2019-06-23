
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Patronajes', function(table){
            table.increments('id');
            table.string('nombre');
            table.decimal('precio');
            table.string('descripcion');
            table.string('urlArchivo')
            table.integer('idServicio').references('id').inTable('Servicios');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('Patronajes'),
      ])
  };