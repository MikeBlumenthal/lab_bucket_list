use bucket_list;

db.dropDatabase();

db.items.insertMany([

  {
    item: "take bubble bath",
    status: true
  },

  {
    item: "drink petrol",
    status: false
  },

  {
    item: "ride a wave",
    status: false
  },
  
  {
    item: "fight a pig",
    status: false
  }

]);
