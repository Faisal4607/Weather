const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  deliveryPerson: {
    name: { type: String },
    contact: { type: String },
  },
  currentLocation: { type: String }, // e.g., GPS coordinates
  status: { type: String, enum: ["In Transit", "Delivered", "Failed"], default: "In Transit" },
  performanceMetrics: {
    deliveryTime: { type: Number }, // Time in minutes
    feedbackScore: { type: Number, min: 1, max: 5 },
  },
}, { timestamps: true });

module.exports = mongoose.model("Delivery", deliverySchema);
