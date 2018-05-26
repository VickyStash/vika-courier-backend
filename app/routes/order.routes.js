module.exports = (app) => {
    const orders = require('../controllers/order.controller.js');

    // Create a new Order
    app.post('/orders', orders.create);

    // Retrieve all Order
    app.get('/orders', orders.findAll);

    // Retrieve a single Order with noteId
    app.get('/orders/:orderId', orders.findOne);

    // Update a Order with noteId
    app.put('/orders/:orderId', orders.update);

    // Delete a Order with noteId
    app.delete('/orders/:orderId', orders.delete);
}
