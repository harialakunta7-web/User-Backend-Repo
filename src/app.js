const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const serviceCategoryRoutes = require("./routes/serviceCategoryRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
require('dotenv').config();

app.use(express.json());
app.use('/users', userRoutes);
app.use("/services", serviceCategoryRoutes);
app.use("/bookings", bookingRoutes);

module.exports = app;
