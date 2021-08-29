require("dotenv").config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log(`Servidor rodando http://localhost:${port} `)
  })