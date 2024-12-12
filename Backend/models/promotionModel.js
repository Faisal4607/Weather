const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true }, // e.g., 10 for 10%
  validFrom: { type: Date, required: true },
  validUntil: { type: Date, required: true },
  usageLimit: { type: Number, default: 0 }, // 0 for unlimited
}, { timestamps: true });

module.exports = mongoose.model("Promotion", promotionSchema);
