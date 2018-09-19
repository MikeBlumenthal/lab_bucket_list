const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find().toArray().then( (info) => res.json(info) )
  });

  router.post('/', (req, res) => {
    const newItem = req.body;
    collection.insertOne(newItem)
    .then(() => {
      collection.find().toArray().then( (info) => res.json(info) )
    });
  });

  return router;
};

module.exports = createRouter;
