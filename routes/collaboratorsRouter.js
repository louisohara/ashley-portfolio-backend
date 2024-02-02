const express = require("express");
const router = express.Router();
const collaboratorsController = require("../controller/collaboratorsController");
const authenticate = require("../middleware/authenticate");

router.get("/", collaboratorsController.getCollaborators);
router.post("/", authenticate, collaboratorsController.addCollaborator);
router.put("/:id", authenticate, collaboratorsController.editCollaborator);
router.delete("/:id", authenticate, collaboratorsController.deleteCollaborator);

module.exports = router;
