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

module.exports = router;