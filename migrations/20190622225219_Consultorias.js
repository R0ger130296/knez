
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Consultorias', function(table){
            table.increments('id');
            table.string('nombre');
            table.string('descripcion');
            table.integer('idTipoConsultoria').references('id').inTable('TipoConsulta');
            table.integer('idServicio').references('id').inTable('Servicios');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('Consultorias'),
      ])
  };
  