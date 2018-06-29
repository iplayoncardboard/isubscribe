const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSubscriptionSchema = new Schema({
    subscription: {type: Schema.Types.ObjectId},
    description: {type:String, required:true},
    categories:{type:Array, required:false},
    iconURL: {type: String, required:true, trim:true},
    url: {type: String, required: true, tirm: true},
    price: {type: Array, required: true},
    date: {type: Date, default: Date.now },
    active:{type: Boolean, default: true}
});
const User = mongoose.model("UserSubscription", userSubscriptionSchema);

module.exports = User;

//Tie to subscription model and add some stuff like my price.