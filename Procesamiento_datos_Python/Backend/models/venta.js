const { Schema, model, Number } = require('mongoose');

const VentasSchema = Schema({
    Periodo: {
        type: String,
    },
    TipoProducto: {
        type: String,
    },
    Region: {
        type: String,
    },
    Ingresos: {
        type: Number,
    },
    Gastos: {
        type: Number,
    },
}, {  collection: 'ventas' });


VentasSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model('ventas',VentasSchema );
