// 🔐 Service Category Module
// This file is part of the service category feature.
// Safe to delete without affecting user management.

const categories = [
  { id: "cat_1", name: "Plumbing", icon: "🔧" },
  { id: "cat_2", name: "Electrician", icon: "💡" },
  { id: "cat_3", name: "Cleaning", icon: "🧹" }
];

const servicesByCategory = {
  cat_1: [
    { id: "svc_101", name: "Tap Repair", description: "Fix leaking taps", basePrice: 150, icon: "🚰" },
    { id: "svc_102", name: "Pipe Installation", description: "Install new pipes", basePrice: 300, icon: "🛠️" }
  ],
  cat_2: [
    { id: "svc_201", name: "Fan Repair", description: "Fix ceiling fans", basePrice: 200, icon: "🌀" }
  ],
  cat_3: [
    { id: "svc_301", name: "Home Cleaning", description: "Full house cleaning", basePrice: 500, icon: "🏠" }
  ]
};

module.exports = { categories, servicesByCategory };
