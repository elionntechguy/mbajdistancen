var express = require("express");
var router = express.Router();
var cors = require("cors");
const fs = require('fs');

const dataPath = './routes/api.json';
router.get("/", cors(), function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
  res.write(JSON.stringify(getAPIdata()));
  res.end();
});

const saveAPIdata = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(dataPath, stringifyData)
}

const getAPIdata = () => {
  const jsonData = fs.readFileSync(dataPath)
  return JSON.parse(jsonData)
}

// router.put('/post', (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
//   res.write(JSON.stringify(data));
//   fs.readFile(dataPath, 'utf8', (err, data) => {
//     const accountId = req.params['id'];
//     existAccounts[accountId] = req.body;
//     saveAccountData(existAccounts);
//     res.send(`accounts with id ${accountId} has been updated`)
//   }, true);
// });

module.exports = router;
