var express = require("express");
var router = express.Router();
var cors = require('cors');


/* GET users listing. */
router.get("/", cors(), function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let x = {
      tePergjithshme:{
          teKonfirmuara:763,
          teSheruara:166,
          teVdekur:21
      },
      historiku:[
        {
          data: "13-Mar",
          teKonfirmuara: 2,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "14-Mar",
          teKonfirmuara: 5,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "15-Mar",
          teKonfirmuara: 13,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "16-Mar",
          teKonfirmuara: 16,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "17-Mar",
          teKonfirmuara: 19,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "18-Mar",
          teKonfirmuara: 20,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "19-Mar",
          teKonfirmuara: 21,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "20-Mar",
          teKonfirmuara: 24,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "21-Mar",
          teKonfirmuara: 31,
          teSheruara: 0,
          teVdekur: 0,
          
        },
        {
          data: "22-Mar",
          teKonfirmuara: 33,
          teSheruara: 0,
          teVdekur: 1,
          
        },
        {
          data: "23-Mar",
          teKonfirmuara: 61,
          teSheruara: 0,
          teVdekur: 1,
          
        },
        {
          data: "24-Mar",
          teKonfirmuara: 63,
          teSheruara: 0,
          teVdekur: 1,
          
        },
        {
          data: "25-Mar",
          teKonfirmuara: 71,
          teSheruara: 0,
          teVdekur: 1,
          
        },
        {
          data: "26-Mar",
          teKonfirmuara: 86,
          teSheruara: 1,
          teVdekur: 1,
          
        },
        {
          data: "27-Mar",
          teKonfirmuara: 88,
          teSheruara: 1,
          teVdekur: 1,
          
        },
        {
          data: "28-Mar",
          teKonfirmuara: 91,
          teSheruara: 1,
          teVdekur: 1,
          
        },
        {
          data: "29-Mar",
          teKonfirmuara: 94,
          teSheruara: 1,
          teVdekur: 1,
          
        },
        {
          data: "30-Mar",
          teKonfirmuara: 106,
          teSheruara: 1,
          teVdekur: 1,
          
        },
        {
          data: "31-Mar",
          teKonfirmuara: 112,
          teSheruara: 6,
          teVdekur: 1,
          
        },
        {
          data: "01-Apr",
          teKonfirmuara: 125,
          teSheruara: 10,
          teVdekur: 1,
          
        },
        {
          data: "02-Apr",
          teKonfirmuara: 126,
          teSheruara: 10,
          teVdekur: 1,
          
        },
        {
          data: "03-Apr",
          teKonfirmuara: 135,
          teSheruara: 16,
          teVdekur: 1,
          
        },
        {
          data: "04-Apr",
          teKonfirmuara: 140,
          teSheruara: 23,
          teVdekur: 1,
          
        },
        {
          data: "05-Apr",
          teKonfirmuara: 145,
          teSheruara: 23,
          teVdekur: 1,
          
        },
        {
          data: "06-Apr",
          teKonfirmuara: 165,
          teSheruara: 24,
          teVdekur: 3,
          
        },
        {
          data: "07-Apr",
          teKonfirmuara: 184,
          teSheruara: 30,
          teVdekur: 5,
          
        },
        {
          data: "08-Apr",
          teKonfirmuara: 224,
          teSheruara: 37,
          teVdekur: 6,
          
        },
        {
          data: "09-Apr",
          teKonfirmuara: 227,
          teSheruara: 38,
          teVdekur: 7,
          
        },
        {
          data: "10-Apr",
          teKonfirmuara: 250,
          teSheruara: 52,
          teVdekur: 7,
          
        },
        {
          data: "11-Apr",
          teKonfirmuara: 283,
          teSheruara: 58,
          teVdekur: 7,
          
        },
        {
          data: "12-Apr",
          teKonfirmuara: 362,
          teSheruara: 59,
          teVdekur: 7,
          
        },
        {
          data: "13-Apr",
          teKonfirmuara: 377,
          teSheruara: 63,
          teVdekur: 8,
          
        },
        {
          data: "14-Apr",
          teKonfirmuara: 387,
          teSheruara: 66,
          teVdekur: 8,
          
        },
        {
          data: "15-Apr",
          teKonfirmuara: 423,
          teSheruara: 71,
          teVdekur: 9,
          
        },
        {
          data: "16-Apr",
          teKonfirmuara: 449,
          teSheruara: 79,
          teVdekur: 11,
          
        },
        {
          data: "17-Apr",
          teKonfirmuara: 480,
          teSheruara: 84,
          teVdekur: 12,
          
        },
        {
          data: "18-Apr",
          teKonfirmuara: 510,
          teSheruara: 93,
          teVdekur: 12,
          
        },
        {
          data: "19-Apr",
          teKonfirmuara: 561,
          teSheruara: 102,
          teVdekur: 12,
          
        },
        {
          data: "20-Apr",
          teKonfirmuara: 598,
          teSheruara: 123,
          teVdekur: 15,
          
        },
        {
          data: "21-Apr",
          teKonfirmuara: 604,
          teSheruara: 128,
          teVdekur: 18,
          
        },
        {
          data: "22-Apr",
          teKonfirmuara: 630,
          teSheruara: 138,
          teVdekur: 18,
        }
      ]
  }
  res.end(JSON.stringify(x));
});

module.exports = router;
