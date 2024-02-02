const knex = require("knex")(require("../knexfile"));

const getCollaborators = async (req, res) => {
  try {
    const collaborators = await knex("collaborators").select("*");
    res.status(200).json(collaborators);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error retrieving collaborators: ${error}` });
  }
};

const addCollaborator = async (req, res) => {
  const { film_id, title, collaborator } = req.body;
  try {
    const newCollaborator = {
      film_id,
      title,
      collaborator,
    };
    const [id] = await knex("collaborators")
      .insert(newCollaborator)
      .returning("id");
    const insertedCollaborator = await knex("collaborators")
      .where({ id })
      .first();
    res.status(201).json(insertedCollaborator);
  } catch (error) {
    res.status(500).json({ message: `Error adding Collaborator: ${error}` });
  }
};

const editCollaborator = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const result = await knex("collaborators").where({ id }).update(updates);
    if (result === 0) {
      return res
        .status(404)
        .json({ message: `Collaborator with ID ${id} not found` });
    }
    const editSingleCollaborator = await knex("collaborators")
      .where({ id })
      .first();
    res.status(200).json(editSingleCollaborator);
  } catch (error) {
    res.status(500).json({ message: `Error editing collaborator: ${error}` });
  }
};

const deleteCollaborator = async (req, res) => {
  try {
    const result = await knex("collaborators")
      .where({ id: req.params.id })
      .del();
    if (result === 0) {
      return res
        .status(404)
        .json({ message: `collaborator with ID ${id} not found` });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: `Error deleting collaborator: ${error}` });
  }
};

module.exports = {
  getCollaborators,
  addCollaborator,
  editCollaborator,
  deleteCollaborator,
};
