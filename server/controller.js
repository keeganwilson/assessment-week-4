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
  }
}