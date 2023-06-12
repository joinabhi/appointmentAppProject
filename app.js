const express = require('express');
const app = express();
const cors=require('cors');
const bodyParser = require('body-parser');
const UserRoute = require('./route/user');
const sequelize = require('./util/database');




app.use(cors());

app.use(bodyParser.json());

app.use('/', UserRoute);

sequelize
  .sync()
  .then(() => {
   app.listen(1000, () => {
      console.log('Server started on port 1000');
    });
  })
  .catch(error => console.log(error));