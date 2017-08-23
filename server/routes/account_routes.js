const express = require('express'),
    router = express.Router(),
    {Account,
    User,
    Website,
    Source,
    Medium,
    Url } = require('../models');

let attributes;
Account
    .where({})
    .fetch()
    .then(account => {
        attributes = Object.keys(account.attributes);
    })

module.exports = router;