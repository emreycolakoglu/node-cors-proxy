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
