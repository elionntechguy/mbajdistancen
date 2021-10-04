let express = require('express');
let apiRouter = require('./routes/api');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);

app.listen(process.env.PORT, '0.0.0.0');

module.exports = app;
