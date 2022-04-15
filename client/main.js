const baseURL = 'http://localhost:4000/api'

const routesContainer = document.querySelector('#routes-container')
const form = document.querySelector('form')

document.getElementById("complimentButton").onclick = () => {
    axios.get(`${baseURL}/compliment/`)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};

document.getElementById("predictButton").onclick = () => {
    axios.get(`${baseURL}/prediction/`)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};
const routesCallback = ({ data: routes }) => displayRoutes(routes)
const errCallback = err => console.log(err.response.data)

const getAllRoutes = () => axios.get(`${baseURL}/routes`)
        .then(routesCallback)
        .catch(errCallback)

const deleteRoute = id => axios.delete(`${baseURL}/routes/${id}`)
        .then(routesCallback)
        .catch(errCallback)

const addRoute = body => axios.post(`${baseURL}/routes`, body)
        .then(routesCallback)
        .catch(errCallback)

const addTick = (id, type) => axios.put(`${baseURL}/${id}`, {type})
        .then(routesCallback)
        .catch(errCallback)

const submitHandler = event => {
  event.preventDefault()
      
  let name = document.querySelector('#name')
  let difficulty = document.querySelector('input[name="difficulty"]:checked')
  let grade = document.querySelector('input[name="grade"]:checked')
  let ticks = document.querySelector('input[name="ticks"]:checked')
  let imageURL = document.querySelector('#img')
      
  let bodyObj = {
    name: name.value,
    difficulty: difficulty.value,
    grade: grade.value,
    ticks: ticks.value, 
    imageURL: imageURL.value
    }
      
    createRoute(bodyObj)
      
    name.value = ''
    difficulty.checked = false
    grade.checked = false
    ticks.checked = false
    imageURL.value = ''
  }

const createRouteCard = route => {
  const routeCard = document.createElement('div')
  routeCard.classList.add('route-card')

  routeCard.innerHTML = `<img alt='route image' src=${route.imageURL} class="route-image"/>
  <p class="route-name">Route: ${route.name}</p>
  <p class="route-difficulty">Difficulty: ${route.difficulty} Grade ${route.grade}</p> 
  <div class="ticks-container">
      <p class="route-ticks">Ticks: ${route.ticks}</p>
      <button onclick="addTick(/routes/${route.id}, 'plus')">+</button>
  </div>
  <button onclick="deleteRoute(${route.id})">Delete</button>
  `

  routesContainer.appendChild(routeCard)
}

const displayRoutes = arr => {
  routesContainer.innerHTML = ``
  for (let i = 0; i < arr.length; i++) {
      createRouteCard(arr[i])
  }
}

form.addEventListener('submit', submitHandler)

getAllRoutes();
