// 🔐 Booking Module
// Safe to delete without affecting user or service modules.

const { bookings } = require("../data/bookingData");

function createBooking({ userId, serviceId, dateTime, location }) {
  const bookingId = `booking_${Date.now()}`;
  const newBooking = {
    bookingId,
    userId,
    serviceId,
    dateTime,
    location,
    status: "pending",
    providerAssigned: false,
    providerDetails: null
  };
  bookings.push(newBooking);
  return { bookingId, status: newBooking.status };
}

function getBookingStatus(bookingId) {
  return bookings.find(b => b.bookingId === bookingId);
}

function cancelBooking(bookingId, reason) {
  const booking = bookings.find(b => b.bookingId === bookingId);
  if (booking) {
    booking.status = "cancelled";
    booking.cancelReason = reason;
    return { status: "cancelled" };
  }
  return null;
}

module.exports = { createBooking, getBookingStatus, cancelBooking };
