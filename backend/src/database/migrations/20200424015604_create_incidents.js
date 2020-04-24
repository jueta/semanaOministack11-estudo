
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        
        table.string('ong_id').notNullable(); //essa e a chave da entidade
    
        table.foreign('ong_id').references('id').inTable('ongs'); //essa e a relacao entre as entidades
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
