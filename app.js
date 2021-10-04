let express = require('express');
let apiRouter = require('./routes/api');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})

module.exports = app;
