const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    contact: String,
    duration: String,
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;