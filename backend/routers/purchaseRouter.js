// Import necessary modules

const express = require("express");
const router = express.Router();

// Import middleware
const purchaseMiddleware = require("../middleware/purchaseMiddleware");

// Import controllers
const purchaseController = require("../controllers/purchaseController");

// Set routers
router.post("/purchase", purchaseMiddleware, purchaseController);

module.exports = router;
