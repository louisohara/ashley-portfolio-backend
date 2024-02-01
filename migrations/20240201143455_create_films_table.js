/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("films", (table) => {
    table.increments("id").primary();
    table.text("title").notNullable();
    table.text("bio").notNullable();
    table.string("image").notNullable(); // PICS
    table.text("description").nullable();
    table.string("role").notNullable();
    table.string("length").notNullable();
    table.string("production").nullable();
    table.string("streaming").nullable();
    table.string("video").nullable(); // PICS
    table.text("link").nullable(); // PICS
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("films");
};
