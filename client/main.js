const routeContainer = document.querySelector('#routes')
const form = document.querySelector('#addRoute')

const baseURL = `http://localhost:4000/api/`

document.getElementById("complimentButton").addEventListener('click', () => {
    axios.get(`${baseURL}compliment/`)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
});

document.getElementById("predictButton").addEventListener('click', () => {
    axios.get(`${baseURL}prediction/`)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
});

