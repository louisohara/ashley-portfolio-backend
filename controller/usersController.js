const knex = require("knex")(require("../knexfile"));

const getUser = async (req, res) => {
  try {
    const user = await knex("users").where({ id: req.params.id }).first();
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with ID ${req.params.id} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving user: ${error}` });
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const result = await knex("users").where({ id }).update(updates);
    if (result === 0) {
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }
    const editSingleUser = await knex("users").where({ id }).first();
    res.status(200).json(editSingleUser);
  } catch (error) {
    res.status(500).json({ message: `Error editing user: ${error}` });
  }
};

module.exports = { getUser, editUser };
