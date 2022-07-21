/*
    Craigslists
    ruta: '/api/Craigslists'
*/
const { Router } = require('express');
const { check } = require('express-validator');

const {
    getCraigslists,
} = require('../controllers/Craigslists')


const router = Router();

router.get( '/', getCraigslists );

module.exports = router;
