const express = require("express");
const router = express.Router();
const nominationsController = require("../controller/nominationsController");
const authenticate = require("../middleware/authenticate");

router.get("/", nominationsController.getNominations);
router.post("/", authenticate, nominationsController.addNomination);
router.put("/:id", authenticate, nominationsController.editNomination);
router.delete("/:id", authenticate, nominationsController.deleteNomination);

module.exports = router;
