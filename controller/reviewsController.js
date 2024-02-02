const knex = require("knex")(require("../knexfile"));

const getReviews = async (req, res) => {
  try {
    const reviews = await knex("reviews").select("*");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving Reviews: ${error}` });
  }
};

const addReview = async (req, res) => {
  const { film_id, author, quote, rating } = req.body;
  try {
    const newReview = {
      film_id,
      author,
      quote,
      rating,
    };
    const [id] = await knex("reviews").insert(newReview).returning("id");
    const insertedReview = await knex("reviews").where({ id }).first();
    res.status(201).json(insertedReview);
  } catch (error) {
    res.status(500).json({ message: `Error adding Review: ${error}` });
  }
};

const editReview = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const result = await knex("reviews").where({ id }).update(updates);
    if (result === 0) {
      return res
        .status(404)
        .json({ message: `Review with ID ${id} not found` });
    }
    const editSingleReview = await knex("reviews").where({ id }).first();
    res.status(200).json(editSingleReview);
  } catch (error) {
    res.status(500).json({ message: `Error editing review: ${error}` });
  }
};

const deleteReview = async (req, res) => {
  try {
    const result = await knex("reviews").where({ id: req.params.id }).del();
    if (result === 0) {
      return res
        .status(404)
        .json({ message: `Review with ID ${id} not found` });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: `Error deleting review: ${error}` });
  }
};

module.exports = {
  getReviews,
  addReview,
  editReview,
  deleteReview,
};
