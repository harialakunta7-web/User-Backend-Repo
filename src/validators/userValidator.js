exports.validatePhone = (phone) => {
  const phoneStr = String(phone).trim();
  if (!/^\d{10}$/.test(phoneStr)) {
    throw new Error('Phone number must be exactly 10 digits');
  }
  return phoneStr;
};

exports.validateOtp = (otp) => {
  if (otp !== '123456') {
    throw new Error('Invalid OTP');
  }
};
