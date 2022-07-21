const { response } = require('express');
const Venta = require('../models/venta');


const getVentas = async(req, res = response) => {

    const venta = await Venta.find();
   
    res.json({
        ok: true,
        venta
    })
}

module.exports = {
    getVentas
}