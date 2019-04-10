const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

const productSchema = new Schema({
    id: { type: 'String', required: true, unique: true },
    title: { type: 'String', required: true },
    cover: { type: 'String', required: true },
    desc: { type: 'String', required: true },
    genre: { type: 'String', required: true },
    badge: { type: 'String' },
    year: { type: 'Number', required: true },
    price: { type: 'Number', required: true }
});

module.exports = mongoose.model('Product', productSchema);
