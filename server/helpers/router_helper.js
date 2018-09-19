const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find().toArray().then( (info) => res.json(info) )
  });

  router.get('/:id', (req, res) => {
      const id = req.params.id;
      collection
        .find({ _id: ObjectID(id) })
        .toArray()
        .then((info) => res.json(info));
    });

  router.post('/', (req, res) => {
    const newItem = req.body;
    collection.insertOne(newItem)
    .then(() => {
      collection.find().toArray().then( (info) => res.json(info) )
    });
  });

  router.put('/:id', (req,res) => {
    const id = req.params.id;
    collection.updateOne(
      { _id: ObjectID(id)},
      { $set: { status: "true"} }
    )
    .then(() => {
      collection.find().toArray().then( (info) => res.json(info) )
    });
  })

  return router;
};

module.exports = createRouter;
