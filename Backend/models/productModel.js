const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: String }, // e.g., "500g"
  description: { type: String },
  image: { type: String }, // Single image field (changed from array to string)
  stock: { type: Number, required: true },
  expiryDate: { type: Date },
  SEOtags: [String], // For search engine optimization
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Links the product to a category
    required: true,
  },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String },
      images: [{ type: String }], // Review images can still be an array if needed
    },
  ],
  averageRating: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
