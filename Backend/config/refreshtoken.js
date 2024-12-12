const jwt = require("jsonwebtoken");

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Refresh token expiry time
  });
};

module.exports = { generateRefreshToken };
