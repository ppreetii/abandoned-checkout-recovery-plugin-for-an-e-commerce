const { mongoose, Schema} = require('./index');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("User", userSchema);