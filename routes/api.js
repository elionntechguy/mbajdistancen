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

router.post('/post', (req, res) => {
  
  const taskFile = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  // let taskToAdd = {
  //   "teKonfirmuara": req.query.teKonfirmuara,
  //   "teSheruara": req.query.teSheruara,
  //   "teVdekur": req.query.teVdekur,
  //   "testimet": req.query.testimet
  // };

  taskFile.tePergjithshme.teKonfirmuara = parseInt(req.query.teKonfirmuara)
  taskFile.tePergjithshme.teSheruara = parseInt(req.query.teSheruara)
  taskFile.tePergjithshme.teVdekur = parseInt(req.query.teVdekur)
  taskFile.tePergjithshme.testimet = parseInt(req.query.testimet)
  let edited_ReadData = JSON.stringify(taskFile);
  fs.writeFileSync(dataPath, JSON.stringify(JSON.parse(edited_ReadData), null, 2));

  // let srcObj2 = srcObj.tePergjithshme
  // taskFile.push(taskToAdd);

  // fs.writeFile(dataPath, JSON.stringify(srcObj2), (err) => { 
  //   if (err) { 
  //     console.log(err); 
  //   }
  // });

  // //get the update data
  // const userData = req.query.teKonfirmuara
  // const existData = JSON.stringify(getAPIdata())
  // //push the updated data
  // let teKonfirmuara = existData.tePergjithshme.teKonfirmuara;
  // teKonfirmuara = userData;
  // fs.writeFileSync(dataPath, JSON.stringify(teKonfirmuara));
  // res.send({success: true, msg: 'User data updated successfully'})
})

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
