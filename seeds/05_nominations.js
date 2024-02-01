/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const nominationsData = require("../seed-data/nominations");

exports.seed = async function (knex) {
  await knex("nominations").del();
  await knex("nominations").insert(nominationsData);
};
