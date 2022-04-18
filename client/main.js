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

const routesCallback = ({ data: routes }) => displayRoutes(routes);
const errCallback = err => console.log(err);

const getAllRoutes = () => axios.get(`${baseURL}/routes/`).then(routesCallback).catch(errCallback);
const addRoute = body => axios.post(`${baseURL}/routes/`, body).then(routesCallback).catch(errCallback);
const deleteRoute = id => axios.delete(`${baseURL}/routes/${id}/`).then(routesCallback).catch(errCallback);
const addTick = id => axios.put(`${baseURL}/routes/${id}/`).then(routesCallback).catch(errCallback);

const submitHandler = event => {
  event.preventDefault()

  let name = document.querySelector('#name');
  let diff = document.querySelector('#diff');
  let grade = document.querySelector('#grade');
  let ticks = document.querySelector('#ticks');
  let imageURL = document.querySelector('#route-image');

  let bodyObj = {
    name: name.value,
    diff: diff.value,
    grade: grade.value,
    ticks: +ticks.value,
    imageURL: imageURL.value
  }

  addRoute(bodyObj);
  
  name.value = '';

  diff.value = '';
  grade.value = '';
  ticks.value = '';
  imageURL.value = '';
}

const createRouteCard = route => {
  const routeCard = document.createElement('div');
  routeCard.classList.add('route-card');

  routeCard.innerHTML = `
  <img class='route-image' alt='route image' src='${route.imageURL}'/>
  <p class='name'>${route.name}</p>
  <p class='diff'>Difficulty: ${route.diff} Grade: ${route.grade}</p>
  <p class='ticks'>Ticks: ${route.ticks}</p>
  <div class='btns-container'>
    <button onclick="addTick(${route.id})">Add Tick</button>
    <button onclick="deleteRoute(${route.id})">Delete</button>
  </div>
  `

  routesContainer.appendChild(routeCard);
}

const displayRoutes = arr => {
  routesContainer.innerHTML = ``
  for(let i = 0; i < arr.length; i++) {
    createRouteCard(arr[i]);
  }
}

form.addEventListener('submit', submitHandler)

getAllRoutes();