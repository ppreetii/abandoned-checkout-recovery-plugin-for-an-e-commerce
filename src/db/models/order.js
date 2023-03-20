const { mongoose, Schema} = require('./index');

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    cartId: {
        type: Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    }
});

module.exports = mongoose.model("User", orderSchema);