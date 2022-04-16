const routesContainer = document.querySelector('#routes-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api`

document.getElementById("complimentButton").addEventListener('click', () => {
    axios.get(`${baseURL}/compliment/`)
        .then(response => {
          const data = response.data;
          alert(data);
        });
});

document.getElementById("predictButton").addEventListener('click', () => {
    axios.get(`${baseURL}/prediction/`)
        .then(response => {
          const data = response.data;
          alert(data);
        });
});

const routesCallback = ({data: routes}) => displayRoutes(routes);
const errCallback = err => console.log(err);

const getAllRoutes = () => axios.get(`${baseURL}/routes`).then(routesCallback).catch(errCallback);
const addRoute = () => axios.get(`${baseURL}/routes`, body).then(routesCallback).catch(errCallback);
const deleteRoute = () => axios.get(`${baseURL}/routes/${id}`).then(routesCallback).catch(errCallback);
const addTick = () => axios.get(`${baseURL}/routes/${id}`, {type}).then(routesCallback).catch(errCallback);

const submitHandler = event => {
  event.prevenDefault()

  let name = document.querySelectory('#name');
  let diff = document.querySelectory('input[name="diff"]:checked');
  let grade = document.querySelectory('input[name="grade"]:checked');
  let ticks = document.querySelectory('input[name="ticks"]:checked');
  let imageURL = document.querySelectory('#img');

  let bodyObj = {
    name: name.value,
    diff: diff.value,
    grade: grade.value,
    ticks: ticks.value,
    imageURL: imageURL.value
  }

  createRoute(bodyObj);

  name.value = ''
  diff.checked = false
  grade.checked = false
  ticks.checked = false
  imageURL = ''
}

const createRouteCard = route => {
  const routeCard = document.createElement('div');
  createRouteCard.classList.add('route-card');

  routeCard.innerHTML = `
  <img class='route-image' alt='route image' src=${route.imageURL}/>;
  <p class='name'>${route.name}</p>
  <p class='diff'>Difficulty: ${route.diff} Grade: ${route.grade}</p>
  <p class='ticks'>${route.ticks}</p>
  <div class='btns-container'>
    <button id='addTickBtn'>+</button>
    <button id='deleteBtn'>Delete</button>
  </div>
  `

  routesContainer.appendChild(routeCard);
}

document.getElementById('addTickBtn').addEventListener('click', addTick());
document.getElementById('deleteBtn'). addEventListener('click', deleteRoute());

const displayRoutes = arr => {
  routesContainer.innerHTML = ``
  for(let i = 0; i < arr.length; i++) {
    createRouteCard(arr[i]);
  }
}

form.addEventListener('submit', submitHandler())

getAllHouses();