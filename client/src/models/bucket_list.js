const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const BucketList = function () {
  this.url = 'http://localhost:3000/api/list';
  this.request = new Request(this.url);
};

BucketList.prototype.getData = function () {
  this.request.get().then( (list) => {
    PubSub.publish('BucketList:data-loaded', list)
  })
};

module.exports = BucketList;
