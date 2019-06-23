
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('TipoPersona', function(table) {
            table.increments('id').primary();
            table.string('nombre');
        })
        ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('TipoPersona'),
    ]);
};
