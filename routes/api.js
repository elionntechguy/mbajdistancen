var express = require("express");
var router = express.Router();
var cors = require("cors");
const fs = require('fs');

const dataPath = '../data/api.json';
router.get("/", cors(), function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(getAPIdata()));
  res.end();
});

const getAPIdata = () => {
  const jsonData = fs.readFileSync(dataPath)
  return JSON.parse(jsonData)
}

module.exports = router;