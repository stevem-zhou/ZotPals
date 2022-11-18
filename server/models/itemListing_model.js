const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    contactInfo: String,
    firstName: String,
    lastName: String,
    duration: String,
    date: String,
    borrowed: {type: Boolean, default:false},
    comments: {type: Array, default:[]},
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;