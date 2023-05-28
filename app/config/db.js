const ObjectID = require("mongodb").ObjectID;
const mongoose = require('mongoose');
const { connectionString } = require('./constants')

// creating mongoose collection
const connection = mongoose.createConnection(connectionString);

module.exports = { ObjectID, connection }