const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    subscriptionName: {type: String, required: true, trim: true},
    description: {type:String, required:true},
    categories:{type:Array, required:false},
    iconURL: {type: String, required:true, trim:true},
    url: {type: String, required: true, tirm: true},
    price: {type: Array, required: false}, //will need to flip the required flag to true.
    date: {type: Date, default: Date.now },
    active:{type: Boolean, default: true}
});
const User = mongoose.model("Subscription", subscriptionSchema);

module.exports = User;

//Array of Price Objects
// [
//     {planName: "Prime",
//     price: 20.00,
//     frequency:"month",
//     default: true}
// ]

