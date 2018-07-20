const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSubscriptionSchema = new Schema({
    subscription: {type: Schema.Types.ObjectId},
    description: {type:String, required:true},
    categories:{type:Array, required:false},
    iconURL: {type: String, required:true, trim:true},
    url: {type: String, required: true, tirm: true},
    price: {type: String, required: true},
    date: {type: Date, default: Date.now },
    email: {type: String, required:true, trim: true},
    active:{type: Boolean, default: true}
});
const UserSubscription = mongoose.model("UserSubscription", userSubscriptionSchema);

module.exports = UserSubscription;

//Tie to subscription model and add some stuff like my price.