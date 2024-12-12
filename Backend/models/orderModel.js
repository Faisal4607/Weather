const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  deliveryAddress: {
    label: { type: String },
    address: { type: String },
    city: { type: String },
    postalCode: { type: String },
  },
  status: { type: String, enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"], default: "Pending" },
  paymentMethod: { type: String, enum: ["PayPal", "Stripe", "Bank Transfer"], required: true },
  paymentStatus: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
  deliveryETA: { type: Date }, // Estimated Time of Arrival
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
