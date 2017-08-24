const express = require('express'),
    router = express.Router(),
    {Account,
    User,
    Website,
    Source,
    Medium,
    Url } = require('../models');

let attributes;
Url .where({})
    .fetch()
    .then(url => {
        attributes = Object.keys(url.attributes);
    });

// ** CREATE ROUTES ** \\
// GET Endpoint to retrieve all url records of an user
router.get('/:user_id', (req, res) => {
    const where = {};
    for (let key in req.query) {
        if (attributes.includes(key)) {
            where[key] = req.query[key];
        }
    }

    Url.where({user_id: req.params.user_id})
        .fetchAll(where)
        .then(urls => {
            console.log(urls);
            res.json(urls.models.map(urls => urls.attributes))
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        })
});

// POST Endpoint for new url record
router.post('/', (req, res) => {
    let newUrl = {};
    for (let key in req.body) {
        if (attributes.includes(key)) {
            newUrl[key] = req.body[key];
        }
    }

    new Url(newUrl)
        .save()
        .then(url => {
            res.json(url.attributes);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});

// DELETE Endpoint for url record
router.delete('/', (req, res) => {
    console.log(req.body)
    // Find the URL with the given id and created_at to destroy it
    Url
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