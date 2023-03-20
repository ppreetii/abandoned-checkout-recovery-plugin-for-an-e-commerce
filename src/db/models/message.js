const { mongoose, Schema } = require("./index");

const messageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cartId: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  attempt: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Message", messageSchema);
