const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;
const mongoose = require('mongoose');
const { connectionString } = require('./constants')

const connectionConfig = {
  useUnifiedTopology: true,
};

// const client = new MongoClient(connectionString, connectionConfig);
const connection = mongoose.createConnection(connectionString);

module.exports = { ObjectID, connection }