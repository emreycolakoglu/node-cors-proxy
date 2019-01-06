const CorsService = require("./corsService");

exports.get = function(req, res) {
  res.send("hello world");
};

exports.post = function(req, res) {
  CorsService.downloadUrl(req.body.url)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
};
