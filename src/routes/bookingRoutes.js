// 🔐 Booking Module
// Safe to delete without affecting user or service modules.

const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookingController");

router.post("/", controller.createBooking);
router.get("/:bookingId", controller.getBookingStatus);
router.post("/:bookingId/cancel", controller.cancelBooking);

module.exports = router;
