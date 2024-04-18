import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    clientFullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // ΑΦΜ
    clientTIN: {
      type: String,
    },
    product: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
