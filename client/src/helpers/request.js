const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

Request.prototype.post = function (content) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(content),
    headers: { 'Content-Type': 'application/json'}
  })
  .then((response) => response.json())
};

module.exports = Request;
