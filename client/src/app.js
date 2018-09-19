const BucketList = require('./models/bucket_list.js');
const ContainerView = require('./views/container_view.js');
const InputView = require('./views/input_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const targetContainer = document.querySelector('#list-container');
  const containerView = new ContainerView(targetContainer);
  containerView.bindEvents();

  const targetForm =document.querySelector('#new-item-form');
  const inputView = new InputView(targetForm);
  inputView.bindEvents();

  const bucketList = new BucketList();
  bucketList.bindEvents();
  bucketList.getData();
})
