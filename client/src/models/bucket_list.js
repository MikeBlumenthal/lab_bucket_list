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

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:item-submitted', (event) => {
    this.request.post(event.detail).then( (list) => {
      PubSub.publish('BucketList:data-loaded', list)
    })
  })
  PubSub.subscribe('ContainerView:tick-clicked', (event) => {
    const id = event.detail;
    // this.request.show(id).then( (object) => {
      this.request.put(id).then( (list) => {
        PubSub.publish('BucketList:data-loaded', list)
      })
    // })
  })
};



module.exports = BucketList;
