var express = require("express");
var router = express.Router();
var cors = require('cors');


/* GET users listing. */
router.get("/", cors(), function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let x = {
      tePergjitshme:{
          teKonfirmuara:387,
          teSheruara:70,
          teVdekur:10
      },
      historiku:[
          {

          }
      ]
  }
  res.end(JSON.stringify(x));
});

module.exports = router;
