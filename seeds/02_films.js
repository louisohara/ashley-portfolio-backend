/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const filmsData = require("../seed-data/films");

exports.seed = async function (knex) {
  await knex("films").del();
  await knex("films").insert(filmsData);
};
