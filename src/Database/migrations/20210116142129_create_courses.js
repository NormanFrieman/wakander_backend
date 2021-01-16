exports.up = function(knex) {
    return knex.schema.createTable("courses", function(table){
        table.increments().primary();
        table.string("name");
        table.specificType("knowledge", "TEXT[]");
        table.string("duration");
        table.integer("points");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("courses")
};