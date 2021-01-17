exports.up = function(knex) {
    return knex.schema.createTable("jobVacancies", function(table){
        table.increments().primary();
        table.string("name");
        table.string("company");
        table.specificType("knowledge", "TEXT[]");
        table.string("city");
        table.string("state");
        table.string("workload");
        table.string("publicationDate");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("companies")
};