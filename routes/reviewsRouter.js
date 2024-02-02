const express = require("express");
const router = express.Router();
const reviewsController = require("../controller/reviewsController");
const authenticate = require("../middleware/authenticate");

router.get("/", reviewsController.getReviews);
router.post("/", authenticate, reviewsController.addReview);
router.put("/:id", authenticate, reviewsController.editReview);
router.delete("/:id", authenticate, reviewsController.deleteReview);

module.exports = router;
