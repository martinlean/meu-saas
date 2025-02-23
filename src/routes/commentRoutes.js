const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rota de teste
router.get("/", commentController.getComments);

module.exports = router;
