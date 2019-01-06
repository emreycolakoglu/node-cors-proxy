const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("./logger").default;
const routes = require("./router").default;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());  
app.use(compression());

app.use("/", routes);

app.listen(port, function(){
  logger.info(`started working on port ${port}`);
});