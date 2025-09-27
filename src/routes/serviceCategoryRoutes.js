// 🔐 Service Category Module
// Safe to delete without affecting user management.

const express = require("express");
const router = express.Router();
const controller = require("../controllers/serviceCategoryController");

router.get("/categories", controller.getCategories);
router.get("/category/:id", controller.getServicesByCategory);

module.exports = router;
