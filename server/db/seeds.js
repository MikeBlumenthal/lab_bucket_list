use bucket_list;

db.dropDatabase();

db.items.insertMany([

  {
    item: "take a bubble bath with John Travolta",
    status: "false"
  },

  {
    item: "drink a daiquiri in Harry's bar",
    status: "false"
  },

  {
    item: "ride a wave",
    status: "true"
  },

  {
    item: "fight a pig",
    status: "false"
  }

]);
