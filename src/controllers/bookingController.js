// 🔐 Booking Module
// Safe to delete without affecting user or service modules.

const bookingService = require("../services/bookingService");

function createBooking(req, res) {
  const { userId, serviceId, dateTime, location } = req.body;
  const result = bookingService.createBooking({ userId, serviceId, dateTime, location });
  res.json(result);
}

function getBookingStatus(req, res) {
  const bookingId = req.params.bookingId;
  const result = bookingService.getBookingStatus(bookingId);
  if (!result) return res.status(404).json({ error: "Booking not found" });
  res.json(result);
}

function cancelBooking(req, res) {
  const bookingId = req.params.bookingId;
  const { reason } = req.body;
  const result = bookingService.cancelBooking(bookingId, reason);
  if (!result) return res.status(404).json({ error: "Booking not found" });
  res.json(result);
}

module.exports = { createBooking, getBookingStatus, cancelBooking };
