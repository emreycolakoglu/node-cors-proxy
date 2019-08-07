const axios = require("axios");

exports.downloadUrl = function(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

exports.postUrl = function(url, data, headers = {}, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers,
        params
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
