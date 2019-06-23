
exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('Persona', function(table){
        table.increments('id').primary();
        table.string('CI');
        table.string('nombres');
        table.string('apellidos');
        table.string('telefonoConvencional');
        table.string('telefonoCelular');
        table.string('direccionDomiciliaria');
        table.string('correoElectronico');
        table.string('contraseña');
        table.integer('idTipoPersona').references('id').inTable('TipoPersona');
       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('TipoPerson'),
    ]);
};
