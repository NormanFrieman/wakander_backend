exports.up = function(knex) {
    return knex.schema.createTable("trails", function(table){
        table.increments().primary();
        table.string("name");
        table.specificType("knowledge", "TEXT[]");
        table.specificType("coursesOrArticles", "TEXT[]");
        table.integer("points");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("trails")
};