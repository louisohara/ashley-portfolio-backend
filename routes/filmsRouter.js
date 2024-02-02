const express = require("express");
const router = express.Router();
const filmsController = require("../controller/filmsController");
const authenticate = require("../middleware/authenticate");

router.get("/", filmsController.getFilms);
// router.get("/:id", filmsController.getFilm);
// router.post("/", authenticate, filmsController.addFilm);
// router.put("/:id", authenticate, filmsController.editFilm);
// router.delete("/:id", authenticate, filmsController.deleteFilm);
// router.get("/:id/reviews", filmsController.getFilmReviews);
// router.get("/:id/collaborators", filmsController.getFilmCollaborators);
// router.get("/:id/nominations", filmsController.getFilmNominations);

module.exports = router;
