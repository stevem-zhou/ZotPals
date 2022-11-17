const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    contact: String,
    duration: String,
    date: String,
    borrowed: {type: Boolean, default:false},
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;