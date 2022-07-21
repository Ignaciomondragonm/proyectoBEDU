/*
    Craigslists
    ruta: '/api/Craigslists'
*/
const { Router } = require('express');
const { check } = require('express-validator');

const {
    getVentas,
} = require('../controllers/ventas')


const router = Router();

router.get( '/', getVentas );

module.exports = router;
