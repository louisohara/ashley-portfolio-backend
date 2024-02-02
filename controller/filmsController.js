const knex = require("knex")(require("../knexfile"));

const getFilms = async (req, res) => {
  try {
    const films = await knex("films").select("*");
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving Films: ${error}` });
  }
};
// DO I NEED TO MARK DESCRIPTION, PRODUCTION, STREAMING
const addFilm = async (req, res) => {
  const {
    title,
    bio,
    image,
    description,
    role,
    length,
    production,
    streaming,
    video,
    link,
  } = req.body;
  try {
    const newFilm = {
      title,
      bio,
      image,
      description,
      role,
      length,
      production,
      streaming,
      video,
      link,
    };
    const [id] = await knex("films").insert(newFilm).returning("id");
    const insertedFilm = await knex("films").where({ id }).first();
    res.status(201).json(insertedFilm);
  } catch (error) {
    res.status(500).json({ message: `Error adding film: ${error}` });
  }
};

const editFilm = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const result = await knex("films").where({ id }).update(updates);
    if (result === 0) {
      return res.status(404).json({ message: `Film with ID ${id} not found` });
    }
    const editSingleFilm = await knex("Films").where({ id }).first();
    res.status(200).json(editSingleFilm);
  } catch (error) {
    res.status(500).json({ message: `Error editing film: ${error}` });
  }
};

const deleteFilm = async (req, res) => {
  try {
    const result = await knex("films").where({ id: req.params.id }).del();
    if (result === 0) {
      return res.status(404).json({ message: `Film with ID ${id} not found` });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: `Error deleting film: ${error}` });
  }
};

module.exports = {
  getFilms,
  addFilm,
  editFilm,
  deleteFilm,
};
