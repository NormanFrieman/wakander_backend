exports.up = function(knex) {
    return knex.schema.createTable("articles", function(table){
        table.increments().primary();
        table.string("name");
        table.string("imageUrl");
        table.specificType("knowledge", "TEXT[]");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("companies")
};