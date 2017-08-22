// Initializing knex and connecting to the database
const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'utm_blocks',
        charset: 'utf8'
    }
});

const bookshelf = require('bookshelf')(knex);

// CREATE MODELS AND ADD RELATIONS

// Create a Account model, and add relations to all other models
const Account = bookshelf.Model.extend({
    tableName: 'accounts',
    users: function () {
        return this.hasMany(User)
    }
})

// Creating the User model, and add relations to all other models
const User = bookshelf.Model.extend({
    tableName: 'users',
    account: function () {
        return this.belongsTo(Account)
    },
    websites: function () {
        return this.hasMany(Website)
    }
})

//Creating the Website model, and add relations to Account and User models
const Website = bookshelf.Model.extend({
    tableName: 'websites',
    account: function () {
        return this.belongsTo(Account)
    },
    user: function () {
        return this.belongsTo(User)
    }
})

//Creating the Source model, and add relations to Account and User models
const Source = bookshelf.Model.extend({
    tableName: 'sources',
    account: function () {
        return this.belongsTo(Account)
    },
    user: function () {
        return this.belongsTo(User)
    }
})

//Creating the Medium model, and add relations to Account and User models
const Medium = bookshelf.Model.extend({
    tableName: 'media',
    account: function () {
        return this.belongsTo(Account)
    },
    user: function () {
        return this.belongsTo(User)
    }
})

//Creating the URL model, and add relations to Account and User models
const Url = bookshelf.Model.extend({
    tableName: 'urls',
    account: function () {
        return this.belongsTo(Account)
    },
    user: function () {
        return this.belongsTo(User)
    }
})



// Export models
module.exports = {
    Account,
    User,
    Website,
    Source,
    Medium,
    Url
}