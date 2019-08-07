const CorsService = require("./corsService");

exports.get = function(req, res) {
  if (req.query.url) {
    CorsService.downloadUrl(req.body.url)
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.status(500).send({ message: error.message });
      });
  } else {
    res.send("hello world");
  }
};

exports.post = function(req, res) {
  CorsService.postUrl(req.body.url, req.body)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
};
