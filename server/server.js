const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(cors());
app.use(pino);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
 
const port = process.env.PORT || 8081;
app.listen(port, () => 
  console.log(`server is running at :${port}`)
);