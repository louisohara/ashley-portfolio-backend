const knex = require("knex")(require("../knexfile"));

const getFilms = async (req, res) => {
  try {
    const films = await knex("films").select("*");
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving films: ${error}` });
  }
};
const getFilm = async (req, res) => {
  try {
    const film = await knex("films").where({ id: req.params.id }).first();
    if (!film) {
      return res
        .status(404)
        .json({ message: `Film with ID ${req.params.id} not found` });
    }
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving film: ${error}` });
  }
};
// getClients = async (req, res) => {
//   try {
//     const films = await knex("films").select("*");
//     if (films) {
//       const filmsReduced = films.map((film) => {
//         const condensed = {
//           client: film.streamingLogo,
//         };
//         return condensed;
//       });
//       res.status(200).json(filmsReduced);
//     }
//   } catch (error) {
//     res.status(500).json({ message: `Error retrieving films: ${error}` });
//   }
// };
const addFilm = async (req, res) => {
  const {
    title,
    bio,
    image,
    description,
    category,
    role,
    length,
    production,
    streamingLogo,
    video,
    link,
  } = req.body;
  try {
    const newFilm = {
      title,
      bio,
      image,
      description,
      category,
      role,
      length,
      production,
      streamingLogo,
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

const getFilmReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await knex("films")
      .join("reviews", "reviews.film_id", "films.id")
      .where({ film_id: id });
    if (!reviews) {
      return res.status(404).json({
        message: `Reviews belonging to a film with ID ${req.params.id} not found`,
      });
    }
    const reviewsReduced = reviews.map((review) => {
      const condensed = {
        id: review.id,
        author: review.author,
        quote: review.quote,
        logo: review.logo,
        rating: review.rating,
      };
      return condensed;
    });
    res.status(200).json(reviewsReduced);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving reviews belonging to that film: ${error}`,
    });
  }
};
const getFilmNominations = async (req, res) => {
  const { id } = req.params;

  try {
    const nominations = await knex("films")
      .join("nominations", "nominations.film_id", "films.id")
      .where({ film_id: id });
    if (!nominations) {
      return res.status(404).json({
        message: `Nominations belonging to a film with ID ${req.params.id} not found`,
      });
    }
    const nominationsReduced = nominations.map((nomination) => {
      const condensed = {
        id: nomination.id,
        result: nomination.result,
        category: nomination.category,
        logo: nomination.logo,
        awardshow: nomination.awardshow,
        link: nomination.link,
      };
      return condensed;
    });
    res.status(200).json(nominationsReduced);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving nominations belonging to that film: ${error}`,
    });
  }
};
const getFilmCollaborators = async (req, res) => {
  const { id } = req.params;

  try {
    const collaborators = await knex("films")
      .join("collaborators", "collaborators.film_id", "films.id")
      .where({ film_id: id });
    if (!collaborators) {
      return res.status(404).json({
        message: `Collaborators belonging to a film with ID ${req.params.id} not found`,
      });
    }
    const collaboratorsReduced = collaborators.map((collaborator) => {
      const condensed = {
        id: collaborator.id,
        title: collaborator.title,
        collaborator: collaborator.collaborator,
      };
      return condensed;
    });
    res.status(200).json(collaboratorsReduced);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving collaborators belonging to that film: ${error}`,
    });
  }
};

module.exports = {
  getFilms,
  getFilm,
  addFilm,
  editFilm,
  deleteFilm,
  getFilmReviews,
  getFilmNominations,
  getFilmCollaborators,
  // getFilmClients,
};
