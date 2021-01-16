exports.up = function(knex) {
    return knex.schema.createTable("jobVacancies", function(table){
        table.increments().primary();
        table.string("name");
        table.string("company");
        table.specificType("knowledge", "TEXT[]");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("companies")
};