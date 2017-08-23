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

module.exports = router;