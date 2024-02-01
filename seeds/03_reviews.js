/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const reviewsData = require("../seed-data/reviews");

exports.seed = async function (knex) {
  await knex("reviews").del();
  await knex("reviews").insert(reviewsData);
};
