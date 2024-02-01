/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const collaboratorsData = require("../seed-data/collaborators");

exports.seed = async function (knex) {
  await knex("collaborators").del();
  await knex("collaborators").insert(collaboratorsData);
};
