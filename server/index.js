const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const {getCompliment, getPrediction} = require('./controller.js');
const {getAllRoutes, deleteRoute, addRoute, addTick} = require('./routesCtrl.js')

app.get('/api/compliment', getCompliment);
app.get('/api/prediction', getPrediction);

app.get('/api/routes', getAllRoutes);
// app.delete('api/routes/:id', deleteRoute);
// app.post('api/routes', addRoute);
// app.put('api/routes/:id', addTick);

app.listen(4000, () => console.log("Server running on 4000"));
