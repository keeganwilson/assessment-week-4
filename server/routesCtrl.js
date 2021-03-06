let routes = require('./db.json')

let globalID = routes.length + 1;

module.exports = {
    getAllRoutes: (req, res) => res.status(200).send(routes),
    deleteRoute: (req, res) => {
        let index = routes.findIndex(elem => elem.id === +req.params.id);
        routes.splice(index, 1);
        res.status(200).send(routes)
  },
    addRoute: (req, res) => {
        const {name, diff, grade, ticks, imageURL} = req.body;
        let newRoute = {
            id: globalID,
            name,
            diff,
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
        let index = routes.findIndex(elem => elem.id === +id);
        routes[index].ticks += 1;
        res.status(200).send(routes);
  }
}