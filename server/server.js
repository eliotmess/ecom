const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/DB');

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('DB is connected') },
  err => { console.log('Can\'t connect to DB' + err) }
);

const productroutes = require('./routes/ProductRoute');
const orderroutes = require('./routes/OrderRoute');

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(cors());
app.use(pino);

app.use('/*', productroutes);
app.use('/*', orderroutes);

 app.get('/*', function (req, res) {
  //  res.sendFile(path.join(__dirname, '../build', 'index.html'));
  let url = path.join(__dirname, '../build', 'index.html');
  if (!url.startsWith('/'))
    url = url.substring(1);
    console.log(url);
  res.sendFile(url);
 });
 
const port = process.env.PORT || 8080;
 app.listen(port, () => 
  console.log('server is running at :8080')
 );