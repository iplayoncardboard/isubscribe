const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, trim: true  },
  alias: {type: String, required: false, tirm: true},
  firstName: {type: String, required: false, trim: true },
  lastName: {type: String, required: false, trim: true },
  age:{type:String, trim: true},
  imageURL:{type:String},
  address: {
    street: {type: String, trim: true },
    appartment: {type: String, trim: true },
    city: {type: String, trim: true },
    state: {type: String, trim: true },
    zip: {type: String, trim: true }
  },
  date: { type: Date, default: Date.now },
  status:{type: Boolean, default: true},
  role: {type: String, default:"user"}
});

const User = mongoose.model("User", userSchema);

module.exports = User;