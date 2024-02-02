const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");
const authenticate = require("../middleware/authenticate.js");

router.get("/:id", usersController.getUser);
router.put("/:id", authenticate, usersController.editUser);

module.exports = router;
