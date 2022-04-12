const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
   },
    email: String,
    age: Number

});

module.exports = new mongoose.model("User", userSchema);