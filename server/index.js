const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const {getCompliment, getPrediction, getRoutes, deleteRoute, addRoute, addTick} = require('./controller');

app.get('/api/compliment', getCompliment);
app.get('/api/prediction', getPrediction);
app.get('/api/routes', getRoutes);
app.delete('.api/routes/:id', deleteRoute);
app.put('/api/routes', addTick);
app.post('/api/routes', addRoute);

app.listen(4000, () => console.log("Server running on 4000"));
