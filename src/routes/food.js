const router = require('express').Router();

const {Food} = require('../models/food');

//routes
router.get("/food", getAllFood);

async function getAllFood(req, res) {
    let data = await Food.findAll();
    res.status(200).json(data);
}

