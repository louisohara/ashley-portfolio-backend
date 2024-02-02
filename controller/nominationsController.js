const knex = require("knex")(require("../knexfile"));

const getNominations = async (req, res) => {
  try {
    const nominations = await knex("nominations").select("*");
    res.status(200).json(nominations);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving nominations: ${error}` });
  }
};

const addNomination = async (req, res) => {
  const { film_id, result, category, awardshow, link } = req.body;
  try {
    const newNomination = {
      film_id,
      result,
      category,
      awardshow,
      link,
    };
    const [id] = await knex("nominations")
      .insert(newNomination)
      .returning("id");
    const insertedNomination = await knex("nominations").where({ id }).first();
    res.status(201).json(insertedNomination);
  } catch (error) {
    res.status(500).json({ message: `Error adding nomination: ${error}` });
  }
};

const editNomination = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const result = await knex("nominations").where({ id }).update(updates);
    if (result === 0) {
      return res
        .status(404)
        .json({ message: `nomination with ID ${id} not found` });
    }
    const editSingleNomination = await knex("nominations")
      .where({ id })
      .first();
    res.status(200).json(editSingleNomination);
  } catch (error) {
    res.status(500).json({ message: `Error editing nomination: ${error}` });
  }
};

const deleteNomination = async (req, res) => {
  try {
    const result = await knex("nominations").where({ id: req.params.id }).del();
    if (result === 0) {
      return res
        .status(404)
        .json({ message: `nomination with ID ${id} not found` });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: `Error deleting nomination: ${error}` });
  }
};

module.exports = {
  getNominations,
  addNomination,
  editNomination,
  deleteNomination,
};
