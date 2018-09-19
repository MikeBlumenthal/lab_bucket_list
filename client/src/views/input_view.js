const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const InputView = function (form) {
  this.form = form;
}

InputView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.submission(event);
  })
};

InputView.prototype.submission = function (event) {
  event.preventDefault();
  const newItem = this.createItem(event.target);
  PubSub.publish('InputView:item-submitted', newItem);
  event.target.reset();
};

InputView.prototype.createItem = function (form) {
  const newItem = {
    item: form.item.value,
    status: false
  }
return newItem;
};

module.exports = InputView;
