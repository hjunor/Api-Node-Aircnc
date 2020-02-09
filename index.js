require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.SENHA}@goweek-nxmj1.mongodb.net/test2?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then( res =>
  console.log("conectado ao banco de dados com exito")
  )

app.use(express.json());

app.listen(process.env.PORT || 3000);