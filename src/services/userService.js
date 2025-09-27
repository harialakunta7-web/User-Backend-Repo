const users = [];
const { validatePhone, validateOtp } = require('../validators/userValidator');

exports.registerUser = async ({ name, phone, email, address }) => {
  const phoneStr = validatePhone(phone);

  const existing = users.find((u) => u.phone === phoneStr || u.email === email);
  if (existing) {
    throw new Error('User already exists');
  }

  const userId = `user_${Date.now()}`;
  const newUser = { userId, name, phone: phoneStr, email, address, rating: 0 };
  users.push(newUser);
  return { userId };
};

exports.loginUser = async ({ phone, otp }) => {
  const phoneStr = validatePhone(phone);
  validateOtp(otp);

  const user = users.find((u) => u.phone === phoneStr);
  if (!user) {
    throw new Error('User not found. Please register first.');
  }

  return { userId: user.userId, profile: user };
};

exports.getProfile = async (userId) => {
  const user = users.find((u) => u.userId === userId);
  if (!user) return {};
  const { name, phone, address, rating } = user;
  return { userId, name, phone, address, rating };
};

exports.updateProfile = async (userId, { name, email, address }) => {
  const user = users.find((u) => u.userId === userId);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.address = address || user.address;
    return { status: 'success' };
  }
  return { status: 'not found' };
};
