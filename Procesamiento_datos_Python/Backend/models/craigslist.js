const { Schema, model } = require('mongoose');

const CraigslistSchema = Schema({
    id: {
        type: String,
    },
    url: {
        type: String,
    },
    region: {
        type: String,
    },
    region_url: {
        type: String,
    },
    precio: {
        type: String,
    },
    anio: {
        type: String,
    },
    fabricante: {
        type: String,
    },
    modelo: {
        type: String,
    },
    condicion: {
        type: String,
    },
    cilindros: {
        type: String,
    },
    combustible: {
        type: String,
    },
    odometro: {
        type: String,
    },
    titulostatus: {
        type: String,
    },
    transmision: {
        type: String,
    },
    VIN: {
        type: String,
    },
    tipo: {
        type: String,
    },
    color: {
        type: String,
    },
    imagen_url: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    estado: {
        type: String,
    },
    lat: {
        type: String,
    },
    long: {
        type: String,
    },
    fechapublicacion: {
        type: Date,
    },
    manejo: {
        type: String,
    },
    tamanio: {
        type: String,
    },
}, {  collection: 'craigslist' });


CraigslistSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model('craigslist',CraigslistSchema );
