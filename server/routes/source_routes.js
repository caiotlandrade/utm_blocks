const express = require('express'),
    router = express.Router(),
    {Account,
    User,
    Website,
    Source,
    Medium,
    Url } = require('../models');

let attributes;
Source
    .where({})
    .fetch()
    .then(source => {
        attributes = Object.keys(source.attributes);
    })


// ** CREATE ROUTES ** \\
// GET Endpoint to retrieve all source records of an user
router.get('/:user_id', (req, res) => {
    const where = {};
    for (let key in req.query) {
        if (attributes.includes(key)) {
            where[key] = req.query[key];
        }
    }

    Source.where({user_id: req.params.user_id})
        .fetchAll(where)
        .then(source => {
            console.log(source);
            res.json(source.models.map(source => source.attributes))
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        })
});

// POST Endpoint for new source record
router.post('/', (req, res) => {
    let newSource = {};
    for (let key in req.body) {
        if (attributes.includes(key)) {
            newSource[key] = req.body[key];
        }
    }

    new Source(newSource)
        .save()
        .then(source => {
            res.json(source.attributes);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

// DELETE Endpoint for medium record
router.delete('/', (req, res) => {
    console.log(req.body)
    // Find the URL with the given id and created_at to destroy it
    Source
    .where({
        id: req.body.id,
        user_id: req.body.user_id
    })
    .destroy()
    .then(url => {
        res.json(url.attributes);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});


module.exports = router;