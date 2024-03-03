const knex = require("knex")(require("../knexfile"));

const getNominations = async (req, res) => {
  try {
    const nominations = await knex("nominations").select("*");
    res.status(200).json(nominations);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving nominations: ${error}` });
  }
};
const getUniqueNominations = async (req, res) => {
  try {
    const nominations = await knex("nominations").select("*");
    if (nominations) {
      const unique = [];
      const nominationsFiltered = nominations.filter((nomination) => {
        if (
          !unique.includes(nomination.logo) &&
          !unique.includes(nomination.link)
        ) {
          unique.push(nomination.logo);
          unique.push(nomination.link);
          return true;
        }
        return false;
      });
      const nominationsReduced = nominationsFiltered.map((nomination) => {
        const condensed = {
          id: nomination.id,
          category: nomination.category,
          logo: nomination.logo,
          link: nomination.link,
          awardshow: nomination.awardshow,
          result: nomination.result,
        };
        return condensed;
      });
      res.status(200).json(nominationsReduced);
    }
  } catch (error) {
    res.status(500).json({ message: `Error retrieving nominations: ${error}` });
  }
};

const addNomination = async (req, res) => {
  const { user_id, film_id, result, category, awardshow, link, logo } =
    req.body;
  try {
    const newNomination = {
      film_id,
      user_id,
      result,
      category,
      awardshow,
      link,
      logo,
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
  getUniqueNominations,
};
