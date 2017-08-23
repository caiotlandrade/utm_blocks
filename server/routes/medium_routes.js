const express = require('express'),
    router = express.Router(),
    {Account,
    User,
    Website,
    Source,
    Medium,
    Url } = require('../models');

let attributes;
Medium
    .where({})
    .fetch()
    .then(medium => {
        attributes = Object.keys(medium.attributes);
    })


// ** CREATE ROUTES ** \\
// GET Endpoint to retrieve all medium records of an user
router.get('/:user_id', (req, res) => {
    const where = {};
    for (let key in req.query) {
        if (attributes.includes(key)) {
            where[key] = req.query[key];
        }
    }

    Medium.where({user_id: req.params.user_id})
        .fetchAll(where)
        .then(medium => {
            console.log(medium);
            res.json(medium.models.map(medium => medium.attributes))
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        })
});

// POST Endpoint for new medium record
router.post('/', (req, res) => {
    let newMedium = {};
    for (let key in req.body) {
        if (attributes.includes(key)) {
            newMedium[key] = req.body[key];
        }
    }

    new Medium(newMedium)
        .save()
        .then(medium => {
            res.json(medium.attributes);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

module.exports = router;