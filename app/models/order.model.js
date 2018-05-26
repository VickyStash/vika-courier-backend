const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    adress: String,
    delivery_time: String,
    status: String,
    photo: String,
});

module.exports = mongoose.model('Order', OrderSchema);
