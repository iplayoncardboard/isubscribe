const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: {type: String, required: true, trim: true},
    date: {type: Date, default: Date.now },
    active:{type: Boolean, default: true}
});
const Categories = mongoose.model("Categories", categorySchema);

module.exports = Categories;
