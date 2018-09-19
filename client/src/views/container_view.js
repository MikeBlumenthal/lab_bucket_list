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
    if (item.status === "true" ){
      listItem.classList.add('item-ticked');
    } else {
      const tick = this.createTickButton(item._id);
      listItem.appendChild(tick);
    }
    bucketList.appendChild(listItem);
  })
};

ContainerView.prototype.createTickButton = function (itemId) {
  const tickButton = document.createElement('button')
  tickButton.classList.add('tick-button');
  tickButton.textContent = '✓';
  tickButton.value = itemId;
  tickButton.addEventListener('click', (event) => {
    PubSub.publish('ContainerView:tick-clicked', event.target.value)
  })
  return tickButton;
};

module.exports = ContainerView;
