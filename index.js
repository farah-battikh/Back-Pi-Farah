const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ajoutez cette ligne

const mongooseConfig = require("./databaseConfig/dbConfig.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Utilisez le middleware cors pour permettre les requêtes depuis tous les domaines
app.use(bodyParser.json());

const eventRouter = require('./routes/events');
app.use(eventRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(mongooseConfig.mongo.uri);
