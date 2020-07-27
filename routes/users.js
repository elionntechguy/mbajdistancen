var express = require("express");
var router = express.Router();
var cors = require("cors");

/* GET users listing. */
router.get("/", cors(), function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let x = {
    tePergjithshme: {
      teKonfirmuara: 7413,
      teSheruara: 4027,
      teVdekur: 185,
    },
    qytetet: [
      { qyteti: "Prishtine", raste: 2448 },
      { qyteti: "Mitrovice", raste: 337 },
      { qyteti: "Peje", raste: 315 },
      { qyteti: "Prizren", raste: 452 },
      { qyteti: "Ferizaj", raste: 510 },
      { qyteti: "Gjilan", raste: 410 },
      { qyteti: "Gjakove", raste: 191 }
    ],
    historiku: [
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
      },
      {
        data: "23-Apr",
        teKonfirmuara: 669,
        teSheruara: 159,
        teVdekur: 19,
      },
      {
        data: "24-Apr",
        teKonfirmuara: 703,
        teSheruara: 162,
        teVdekur: 19,
      },
      {
        data: "25-Apr",
        teKonfirmuara: 731,
        teSheruara: 165,
        teVdekur: 20,
      },
      {
        data: "26-Apr",
        teKonfirmuara: 763,
        teSheruara: 166,
        teVdekur: 21,
      },
      {
        data: "27-Apr",
        teKonfirmuara: 780,
        teSheruara: 201,
        teVdekur: 22,
      },
      {
        data: "28-Apr",
        teKonfirmuara: 790,
        teSheruara: 232,
        teVdekur: 22,
      },
      {
        data: "29-Apr",
        teKonfirmuara: 799,
        teSheruara: 249,
        teVdekur: 22,
      },
      {
        data: "30-Apr",
        teKonfirmuara: 806,
        teSheruara: 271,
        teVdekur: 22,
      },
      {
        data: "01-May",
        teKonfirmuara: 813,
        teSheruara: 298,
        teVdekur: 22,
      },
      {
        data: "02-May",
        teKonfirmuara: 823,
        teSheruara: 336,
        teVdekur: 22,
      },
      {
        data: "03-May",
        teKonfirmuara: 851,
        teSheruara: 381,
        teVdekur: 25,
      },
      {
        data: "04-May",
        teKonfirmuara: 855,
        teSheruara: 403,
        teVdekur: 26,
      },
      {
        data: "05-May",
        teKonfirmuara: 856,
        teSheruara: 490,
        teVdekur: 26,
      },
      {
        data: "06-May",
        teKonfirmuara: 860,
        teSheruara: 533,
        teVdekur: 26,
      },
      {
        data: "07-May",
        teKonfirmuara: 861,
        teSheruara: 561,
        teVdekur: 27,
      },
      {
        data: "08-May",
        teKonfirmuara: 862,
        teSheruara: 622,
        teVdekur: 28,
      },
      {
        data: "09-May",
        teKonfirmuara: 870,
        teSheruara: 653,
        teVdekur: 28,
      },
      {
        data: "10-May",
        teKonfirmuara: 884,
        teSheruara: 655,
        teVdekur: 28,
      },
      {
        data: "11-May",
        teKonfirmuara: 895,
        teSheruara: 657,
        teVdekur: 28,
      },
      {
        data: "12-May",
        teKonfirmuara: 919,
        teSheruara: 671,
        teVdekur: 29,
      },
      {
        data: "13-May",
        teKonfirmuara: 927,
        teSheruara: 671,
        teVdekur: 29,
      },
      {
        data: "14-May",
        teKonfirmuara: 945,
        teSheruara: 690,
        teVdekur: 29,
      },
      {
        data: "15-May",
        teKonfirmuara: 955,
        teSheruara: 691,
        teVdekur: 29,
      },
      {
        data: "16-May",
        teKonfirmuara: 978,
        teSheruara: 713,
        teVdekur: 29,
      },
      {
        data: "17-May",
        teKonfirmuara: 985,
        teSheruara: 736,
        teVdekur: 29,
      },
      {
        data: "18-May",
        teKonfirmuara: 988,
        teSheruara: 754,
        teVdekur: 29,
      },
      {
        data: "19-May",
        teKonfirmuara: 989,
        teSheruara: 769,
        teVdekur: 29,
      },
      {
        data: "20-May",
        teKonfirmuara: 1003,
        teSheruara: 772,
        teVdekur: 29,
      },
      {
        data: "21-May",
        teKonfirmuara: 1004,
        teSheruara: 772,
        teVdekur: 29,
      },
      {
        data: "22-May",
        teKonfirmuara: 1025,
        teSheruara: 782,
        teVdekur: 29,
      },
      {
        data: "23-May",
        teKonfirmuara: 1032,
        teSheruara: 785,
        teVdekur: 29,
      },
      {
        data: "24-May",
        teKonfirmuara: 1032,
        teSheruara: 789,
        teVdekur: 29,
      },
      {
        data: "25-May",
        teKonfirmuara: 1038,
        teSheruara: 791,
        teVdekur: 30,
      },
      {
        data: "26-May",
        teKonfirmuara: 1047,
        teSheruara: 794,
        teVdekur: 30,
      },
      {
        data: "27-May",
        teKonfirmuara: 1048,
        teSheruara: 801,
        teVdekur: 30,
      },
      {
        data: "28-May",
        teKonfirmuara: 1052,
        teSheruara: 820,
        teVdekur: 30,
      },
      {
        data: "29-May",
        teKonfirmuara: 1064,
        teSheruara: 829,
        teVdekur: 30,
      },
      {
        data: "30-May",
        teKonfirmuara: 1070,
        teSheruara: 841,
        teVdekur: 30,
      },
      {
        data: "31-May",
        teKonfirmuara: 1082,
        teSheruara: 843,
        teVdekur: 30,
      },
      {
        data: "01-Jun",
        teKonfirmuara: 1109,
        teSheruara: 843,
        teVdekur: 30,
      },
      {
        data: "02-Jun",
        teKonfirmuara: 1122,
        teSheruara: 847,
        teVdekur: 30,
      },
      {
        data: "03-Jun",
        teKonfirmuara: 1142,
        teSheruara: 871,
        teVdekur: 30,
      },
      {
        data: "04-Jun",
        teKonfirmuara: 1147,
        teSheruara: 874,
        teVdekur: 30,
      },
      {
        data: "05-Jun",
        teKonfirmuara: 1158,
        teSheruara: 876,
        teVdekur: 30,
      },
      {
        data: "06-Jun",
        teKonfirmuara: 1194,
        teSheruara: 884,
        teVdekur: 30,
      },
      {
        data: "07-Jun",
        teKonfirmuara: 1234,
        teSheruara: 890,
        teVdekur: 31,
      },
      {
        data: "08-Jun",
        teKonfirmuara: 1263,
        teSheruara: 912,
        teVdekur: 31,
      },
      {
        data: "09-Jun",
        teKonfirmuara: 1269,
        teSheruara: 912,
        teVdekur: 31,
      },
      {
        data: "10-Jun",
        teKonfirmuara: 1298,
        teSheruara: 913,
        teVdekur: 31,
      },
      {
        data: "11-Jun",
        teKonfirmuara: 1326,
        teSheruara: 921,
        teVdekur: 31,
      },
      {
        data: "12-Jun",
        teKonfirmuara: 1384,
        teSheruara: 921,
        teVdekur: 31,
      },
      {
        data: "13-Jun",
        teKonfirmuara: 1437,
        teSheruara: 928,
        teVdekur: 32,
      },
      {
        data: "14-Jun",
        teKonfirmuara: 1486,
        teSheruara: 953,
        teVdekur: 33,
      },
      {
        data: "15-Jun",
        teKonfirmuara: 1615,
        teSheruara: 963,
        teVdekur: 33,
      },
      {
        data: "16-Jun",
        teKonfirmuara: 1756,
        teSheruara: 968,
        teVdekur: 34,
      },
      {
        data: "17-Jun",
        teKonfirmuara: 1833,
        teSheruara: 968,
        teVdekur: 34,
      },
      {
        data: "18-Jun",
        teKonfirmuara: 1916,
        teSheruara: 973,
        teVdekur: 34,
      },
      {
        data: "19-Jun",
        teKonfirmuara: 1998,
        teSheruara: 980,
        teVdekur: 34,
      },
      {
        data: "20-Jun",
        teKonfirmuara: 2073,
        teSheruara: 1018,
        teVdekur: 35,
      },
      {
        data: "21-Jun",
        teKonfirmuara: 2169,
        teSheruara: 1047,
        teVdekur: 36,
      },
      {
        data: "22-Jun",
        teKonfirmuara: 2216,
        teSheruara: 1069,
        teVdekur: 37,
      },
      {
        data: "23-Jun",
        teKonfirmuara: 2268,
        teSheruara: 1108,
        teVdekur: 38,
      },
      {
        data: "24-Jun",
        teKonfirmuara: 2363,
        teSheruara: 1171,
        teVdekur: 40,
      },
      {
        data: "25-Jun",
        teKonfirmuara: 2432,
        teSheruara: 1246,
        teVdekur: 42,
      },
      {
        data: "26-Jun",
        teKonfirmuara: 2494,
        teSheruara: 1307,
        teVdekur: 44,
      },
      {
        data: "27-Jun",
        teKonfirmuara: 2590,
        teSheruara: 1394,
        teVdekur: 48,
      },
      {
        data: "28-Jun",
        teKonfirmuara: 2677,
        teSheruara: 1425,
        teVdekur: 49,
      },
      {
        data: "29-Jun",
        teKonfirmuara: 2799,
        teSheruara: 1506,
        teVdekur: 49,
      },
      {
        data: "30-Jun",
        teKonfirmuara: 2878,
        teSheruara: 1577,
        teVdekur: 51,
      },
      {
        data: "01-Jul",
        teKonfirmuara: 2991,
        teSheruara: 1644,
        teVdekur: 54,
      },
      {
        data: "02-Jul",
        teKonfirmuara: 3064,
        teSheruara: 1707,
        teVdekur: 55,
      },
      {
        data: "03-Jul",
        teKonfirmuara: 3178,
        teSheruara: 1824,
        teVdekur: 58,
      },
      {
        data: "04-Jul",
        teKonfirmuara: 3356,
        teSheruara: 1874,
        teVdekur: 66,
      },
      {
        data: "05-Jul",
        teKonfirmuara: 3508,
        teSheruara: 1902,
        teVdekur: 75,
      },
      {
        data: "06-Jul",
        teKonfirmuara: 3703,
        teSheruara: 1946,
        teVdekur: 79,
      },
      {
        data: "07-Jul",
        teKonfirmuara: 3886,
        teSheruara: 2003,
        teVdekur: 82,
      },
      {
        data: "08-Jul",
        teKonfirmuara: 4100,
        teSheruara: 2063,
        teVdekur: 86,
      },
      {
        data: "09-Jul",
        teKonfirmuara: 4307,
        teSheruara: 2095,
        teVdekur: 94,
      },
      {
        data: "10-Jul",
        teKonfirmuara: 4512,
        teSheruara: 2156,
        teVdekur: 97,
      },
      {
        data: "11-Jul",
        teKonfirmuara: 4715,
        teSheruara: 2227,
        teVdekur: 101,
      },
      {
        data: "12-Jul",
        teKonfirmuara: 4931,
        teSheruara: 2267,
        teVdekur: 102,
      },
      {
        data: "13-Jul",
        teKonfirmuara: 5118,
        teSheruara: 2370,
        teVdekur: 108,
      },
      {
        data: "14-Jul",
        teKonfirmuara: 5237,
        teSheruara: 2462,
        teVdekur: 112,
      },
      {
        data: "15-Jul",
        teKonfirmuara: 5369,
        teSheruara: 2545,
        teVdekur: 118,
      },
      {
        data: "16-Jul",
        teKonfirmuara: 5472,
        teSheruara: 2640,
        teVdekur: 124,
      },
      {
        data: "17-Jul",
        teKonfirmuara: 5617,
        teSheruara: 2811,
        teVdekur: 130,
      },
      {
        data: "18-Jul",
        teKonfirmuara: 5735,
        teSheruara: 2968,
        teVdekur: 135,
      },
      {
        data: "19-Jul",
        teKonfirmuara: 5877,
        teSheruara: 3069,
        teVdekur: 139,
      },
      {
        data: "20-Jul",
        teKonfirmuara: 6045,
        teSheruara: 3226,
        teVdekur: 144,
      },
      {
        data: "21-Jul",
        teKonfirmuara: 6286,
        teSheruara: 3369,
        teVdekur: 150,
      },
      {
        data: "22-Jul",
        teKonfirmuara: 6467,
        teSheruara: 3505,
        teVdekur: 158,
      },
      {
        data: "23-Jul",
        teKonfirmuara: 6680,
        teSheruara: 3614,
        teVdekur: 164,
      },
      {
        data: "24-Jul",
        teKonfirmuara: 6917,
        teSheruara: 3753,
        teVdekur: 169,
      },
      {
        data: "25-Jul",
        teKonfirmuara: 7137,
        teSheruara: 3874,
        teVdekur: 177,
      },
      {
        data: "26-Jul",
        teKonfirmuara: 7413,
        teSheruara: 4027,
        teVdekur: 185,
      }

    ],
  };
  res.end(JSON.stringify(x));
});

module.exports = router;
