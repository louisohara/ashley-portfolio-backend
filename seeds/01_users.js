/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const usersData = require("../seed-data/users");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert(usersData);
};
