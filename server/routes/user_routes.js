const express = require('express'),
    router = express.Router(),
    {Account,
    User,
    Website,
    Source,
    Medium,
    Url } = require('../models');

let attributes;
User
    .where({})
    .fetch()
    .then(user => {
        attributes = Object.keys(user.attributes);
    })

    

module.exports = router;