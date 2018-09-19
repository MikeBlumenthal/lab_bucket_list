const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

Request.prototype.show = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'GET'
  })
  .then((response) => response.json())
};

Request.prototype.post = function (content) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(content),
    headers: { 'Content-Type': 'application/json'}
  })
  .then((response) => response.json())
};

Request.prototype.put = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'PUT'
    // body: JSON.stringify(id),
    // headers: { 'Content-Type': 'application/json'}
  })
  .then((response) => response.json())
}

module.exports = Request;
