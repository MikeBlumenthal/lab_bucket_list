const PubSub = require('../helpers/pub_sub.js');

const ContainerView = function (container) {
  this.container = container;
}

ContainerView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (event) => {
    this.render(event.detail);
  })
};

ContainerView.prototype.render = function (list) {
  this.container.innerHTML = '';
  const target = document.querySelector('#list-container');
  const bucketList = document.createElement('ul');
  target.appendChild(bucketList);
  list.forEach( (item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.item}`;
    listItem.classList.add('list-item');
    bucketList.appendChild(listItem);
  })
};

module.exports = ContainerView;
