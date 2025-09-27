const userService = require('../services/userService');
const { generateToken } = require('../utils/tokenUtils');

exports.registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    const token = generateToken(user.userId);
    res.json({ userId: user.userId, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    const token = generateToken(user.userId);
    res.json({ userId: user.userId, token, profile: user.profile });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  const profile = await userService.getProfile(req.params.userId);
  res.json(profile);
};

exports.updateProfile = async (req, res) => {
  const result = await userService.updateProfile(req.params.userId, req.body);
  res.json(result);
};
