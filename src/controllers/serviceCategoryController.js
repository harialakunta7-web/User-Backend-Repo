// 🔐 Service Category Module
// Safe to delete without affecting user management.

const serviceCategoryService = require("../services/serviceCategoryService");

function getCategories(req, res) {
  const result = serviceCategoryService.getAllCategories();
  res.json(result);
}

function getServicesByCategory(req, res) {
  const categoryId = req.params.id;
  const result = serviceCategoryService.getServicesByCategoryId(categoryId);
  res.json(result);
}

module.exports = { getCategories, getServicesByCategory };
