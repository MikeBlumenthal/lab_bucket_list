const BucketList = require('./models/bucket_list.js');
const ContainerView = require('./views/container_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const targetContainer = document.querySelector('#list-container');
  const containerView = new ContainerView(targetContainer);
  containerView.bindEvents();

  const bucketList = new BucketList();
  bucketList.getData();
})
