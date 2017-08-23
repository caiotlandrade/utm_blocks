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

module.exports = router;