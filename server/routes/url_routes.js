const express = require('express'),
    router = express.Router(),
    {Account,
    User,
    Website,
    Source,
    Medium,
    Url } = require('../models');

let attributes;
Url
    .where({})
    .fetch()
    .then(url => {
        attributes = Object.keys(url.attributes);
    });

// ** CREATE ROUTES ** \\
router.get('/:user_id', (req, res) => {
    // const where = {};
    // for (let key in req.query) {
    //     if (attributes.includes(key)) {
    //         where[key] = req.query[key];
    //     }
    // }

    //Using the verified where object we constructed, we fetch all cars that have the right attributes
    Url.where({user_id: req.params.user_id})
        .fetchAll()
        .then(urls => {
            console.log(urls);
            res.json(urls.models.map(urls => urls.attributes))
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        })
});

module.exports = router;