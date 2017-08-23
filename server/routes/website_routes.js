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


module.exports = router;