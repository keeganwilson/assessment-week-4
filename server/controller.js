let routes = require('./db.json')

let globalID = 4;

module.exports = {
  getCompliment: (req, res) => {
      const compliments = ["You floated that route!",
                        "Good lead, bro!",
                        "Your stoke was too high so you whipped from the chains",
      ];
  
      // choose random compliment
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];
  
      res.status(200).send(randomCompliment);     
  },
  getPrediction: (req, res) => {
    const predictions = ["No way! You drank too much whiskey last night.",
                      "You got a shot. Just don't blow it.",
                       "For sure! You're feelin' strong!",
                       "You will if you keep your head on tight.",
                       "You're outta your league."
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * predictions.length);
    let randomPrediction = predictions[randomIndex];

    res.status(200).send(randomPrediction);     
  },
  getRoutes: (req, res) => {
    res.status(200).send(routes)
  },
  deleteRoute: (req, res) => {
    const {id} = req.params;
        let index = routes.findIndex(elem => elem.id === +req.params.id);
        routes.splice(index, 1);
        res.status(200).send(routes)
  },
  addRoute: (req, res) => {
    const {name, difficulty, grade, ticks, imageURL} = req.body;
    let newRoute = {
        id: globalID,
        name,
        difficulty,
        grade,
        ticks,
        imageURL
    };
    routes.push(newRoute);
    globalID++;
    res.status(200).send(routes);
  },
  addTick: (req, res) => {
    let {id} = req.params;
    let {type} = req.body;
    let index = routes.findIndex(elem => elem.id === +id);
    if (type === 'plus') {
        routes[index].ticks += 1;
        res.status(200).send(routes);
    } else res.status(400).send('Something went wrong')
  }
}