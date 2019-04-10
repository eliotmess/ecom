const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

const orderSchema = new Schema({
    id: { type: 'String', required: true, unique: true },
    ordered: { type: 'Object', required: true },
    totalValue: { type: 'Number', required: true },
    shippingPrice: { type: 'Number' }
});

module.exports = mongoose.model('Order', orderSchema);
