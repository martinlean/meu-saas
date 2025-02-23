const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota de teste
router.get("/", userController.getUsers);

module.exports = router;
