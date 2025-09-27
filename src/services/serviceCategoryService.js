// 🔐 Service Category Module
// Safe to delete without affecting user management.

const { categories, servicesByCategory } = require("../data/serviceCategoryData");

function getAllCategories() {
  return categories;
}

function getServicesByCategoryId(categoryId) {
  return servicesByCategory[categoryId] || [];
}

module.exports = { getAllCategories, getServicesByCategoryId };
