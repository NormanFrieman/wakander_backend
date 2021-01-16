exports.up = function(knex) {
    return knex.schema.createTable("companies", function(table){
        table.increments().primary();
        table.string("name");
        table.string("pass");
        table.string("cnpj");
        table.string("plan");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("companies")
};