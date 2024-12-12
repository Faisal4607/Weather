const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
  addresses: [
    {
      label: { type: String }, // e.g., "Home", "Work"
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
    },
  ],
  loyaltyPoints: { type: Number, default: 0 },
  socialLogin: { type: Boolean, default: false }, // For Google/Facebook logins
  resetToken: { type: String, default: null }, // For password recovery
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if password is not modified
  this.password = await bcrypt.hash(this.password, 10); // Hash the password
  next();
});


module.exports = mongoose.model("User", userSchema);
