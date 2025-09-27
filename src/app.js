const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const serviceCategoryRoutes = require("./routes/serviceCategoryRoutes");
require('dotenv').config();

app.use(express.json());
app.use('/users', userRoutes);
app.use("/services", serviceCategoryRoutes);

module.exports = app;
