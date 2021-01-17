exports.up = function(knex) {
    return knex.schema.createTable("users", function(table){
        table.increments().primary();
        table.string("name");
        table.string("pass");
        table.string("cpf");
        table.string("email");
        table.string("cell");
        table.integer("rating");
        table.specificType("courses", "JSON[]");
        table.specificType("articles", "JSON[]");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users")
};