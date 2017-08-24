const express = require('express'),
    router = express.Router(),
    {Account,
    User,
    Website,
    Source,
    Medium,
    Url } = require('../models');

let attributes;
Website
    .where({})
    .fetch()
    .then(website => {
        attributes = Object.keys(website.attributes);
    })


// ** CREATE ROUTES ** \\
// GET Endpoint to retrieve all website records of an user
router.get('/:user_id', (req, res) => {
    const where = {};
    for (let key in req.query) {
        if (attributes.includes(key)) {
            where[key] = req.query[key];
        }
    }

    Website.where({user_id: req.params.user_id})
        .fetchAll(where)
        .then(website => {
            console.log(website);
            res.json(website.models.map(website => website.attributes))
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        })
});

// POST Endpoint for new website record
router.post('/', (req, res) => {
    let newWebsite = {};
    for (let key in req.body) {
        if (attributes.includes(key)) {
            newWebsite[key] = req.body[key];
        }
    }

    new Website(newWebsite)
        .save()
        .then(website => {
            res.json(website.attributes);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});

// DELETE Endpoint for website record
router.delete('/', (req, res) => {
    console.log(req.body)
    // Find the URL with the given id and created_at to destroy it
    Website
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