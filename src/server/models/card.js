const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CardSchema = new Schema({
    name: String,
    description: String
});

const Card = mongoose.model('card', CardSchema);
module.exports = Card;
