'use strict';

// All routing and data management for "INGREDIENTS"
const router = require('express').Router();

const {Recipe, Ingredients} = require('../models/index.js');

const Model = Ingredients;

// RESTful route definitions
router.get('/ingredients', getAll);
router.get('/ingredients/:id', getOne);
router.post('/ingredients', createRecord);
router.put('/ingredients/:id', updateRecord);
router.delete('/ingredients/:id', deleteRecord);

// ROUTE HANDLERS
async function getAll(request, response) {
    let data = await Model.read(null, {
        include: {
            model: Recipe.model
        }
    });
    response.status(200).json(data);
}

async function getOne(request, response) {
    let id = request.params.id;
    let data = await Model.read(id, {
        include: {
            model: Recipe.model
        }
    });
    response.status(200).json(data);
}

async function createRecord(request, response) {
    let data = request.body;
    let newRecord = await Model.create(data);
    response.status(201).json(newRecord);
}

async function updateRecord(request, response) {
    let id = request.params.id;
    let data = request.body;
    let updatedRecord = await Model.update(id, data);
    response.status(200).json(updatedRecord);
}

async function deleteRecord(request, response) {
    let id = request.params.id;
    let deletedRecord = await Model.delete(id);
    if (typeof deletedRecord === "number") {
        console.log("Resource deleted successfully");
        response.status(204).send(); //nothing expectedback but...
    } else {
        throw new Error("Error deleting record");
    }
}


module.exports = router;
