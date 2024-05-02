const router = require('express').Router(); //nice one-liner

const {Food, People} = require('../models');

//routes
router.get("/food", getAllFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/people/:id', updateFood);
router.get('/test/:id', logThis);

async function getAllFood(req, res) {
    let data = await Food.findAll();
    res.status(200).json(data);
}

async function getOneFood(req, res) {
    let id = req.params.id;
    let data = await Food.findOne({where: {id: id}}); //AWAIT for me...
    res.status(200).json(data);
}

async function createFood(req, res) {
    let data = req.body;
    let newItem = await Food.create(data);
    res.status(201).json(newItem);
}

async function updateFood(req, res) {
    let _id = req.params.id;
    let data = req.body;
    let foodToMod = await People.findOne({where: {id: _id}});
    let gmoFood = await foodToMod.update(data);
    res.status(200).json(gmoFood);
}

// just for testing self
async function logThis(req, res) {
    console.log("food is getting hit..");
    let bluh = req.params.id;
    console.log(bluh) //cant use in res.send - why not, only status codes allowed?
    await res.send(" Say Ho! if you are getting hit!");
}

module.exports = router;
