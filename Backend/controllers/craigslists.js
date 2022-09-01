const { response } = require('express');
const Craigslist = require('../models/craigslist');


const getCraigslists = async(req, res = response) => {
    const craigslist = await Craigslist.find().sort({}).limit(20000);
    res.json({
        ok: true,
        craigslist
    })
}

module.exports = {
    getCraigslists
}