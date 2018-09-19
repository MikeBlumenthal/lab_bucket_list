use bucket_list;

db.dropDatabase();

db.items.insertMany([

  {
    item: "take bubble bath"
  },
  {
    item: "drink petrol"
  },
  {
    item: "ride a wave"
  },
  {
    item: "fight a pig"
  }

]);
