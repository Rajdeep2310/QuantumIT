const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Extract just the date part for createdAt
userSchema.pre('save', function(next) {
    this.createdAt = new Date(this.createdAt).setHours(0, 0, 0, 0);
    next();
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
