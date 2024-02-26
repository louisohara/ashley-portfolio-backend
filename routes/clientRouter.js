const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const films = await knex("films").select("*");
    if (films) {
      const unique = [];
      const filmsFiltered = films.filter((film) => {
        if (
          !unique.includes(film.streamingLogo) &&
          film.streamingLogo !== null
        ) {
          unique.push(film.streamingLogo);
          return true;
        }
        return false;
      });
      const filmsReduced = filmsFiltered.map((film) => {
        const condensed = {
          id: film.id,
          logo: film.streamingLogo,
        };
        return condensed;
      });
      res.status(200).json(filmsReduced);
    }
  } catch (error) {
    res.status(500).json({ message: `Error retrieving films: ${error}` });
  }
});

module.exports = router;
