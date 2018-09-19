const express = require('express');
const createRouter = require('./helpers/router_helper.js');
const server = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const parser = require('body-parser');


const publicPath = path.join(__dirname, '../client/public');
server.use(express.static(publicPath));

server.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('bucket_list');
  const listItemCollection = db.collection('items');
  const router = createRouter(listItemCollection);
  server.use('/api/list', router);
})
.catch(console.error);

server.listen(3000, function () {
  console.log(`Server running on port ${this.address().port}`);
})
