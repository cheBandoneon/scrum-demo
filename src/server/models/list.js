const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ListSchema = new Schema({
    name: String,
    cards: [{
        name: String,
        description: String
    }]
});

const List = mongoose.model('list' , ListSchema);

module.exports = List;
