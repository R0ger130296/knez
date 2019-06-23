
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('DetalleVenta', function(table){
            table.increments('id');
            table.string('descripcion');
            table.integer('idPersona').references('id').inTable('Persona');
            table.integer('idTienda').references('id').inTable('Tienda');
            table.integer('idPatronaje').references('id').inTable('Patronajes');
            table.integer('idCursos').references('id').inTable('Cursos');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('DetalleVenta'),
      ])
  };
  