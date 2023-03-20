const { mongoose, Schema } = require("./index");

/* Description of different order states:
     1: Added to Cart
     2: Abandoned Checkout
*/

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  checkoutUrl: {
    type: String,
    required: true,
  },
  order_state: {
    type: Number,
    required: true,
    default: 1
  },
});

module.exports = mongoose.model("Cart", cartSchema);
