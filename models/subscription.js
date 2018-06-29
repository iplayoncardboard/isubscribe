const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    subscriptionName: {type: String, required: true, trim: true},
    description: {type:String, required:true},
    category:{type:String, required:false},
    iconURL: {type: String, required:true, trim:true},
    url: {type: String, required: true, tirm: true},
    price: {type: Array, required: false}, //will need to flip the required flag to true.
    date: {type: Date, default: Date.now },
    active:{type: Boolean, default: true}
});
const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;

//Array of Price Objects
//default = value we want to show to customer first
// [
//     {planName: "Prime",
//     price: 20.00,
//     frequency:"month",
//     default: true},

//      {planName: "Prime2",
//      price: 40.00,
//      frequency:"month",
//      default: false}
// ]

