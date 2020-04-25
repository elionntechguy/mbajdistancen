var express = require("express");
var router = express.Router();
var cors = require('cors');


/* GET users listing. */
router.get("/", cors(), function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let x = {
      tePergjithshme:{
          teKonfirmuara:703,
          teSheruara:162,
          teVdekur:19
      },
      historiku:[
          {

          }
      ]
  }
  res.end(JSON.stringify(x));
});

module.exports = router;
