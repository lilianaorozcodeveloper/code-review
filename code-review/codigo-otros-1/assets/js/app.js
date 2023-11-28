const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Faltaba un punto
const $b = document.querySelector('.blog'); // Cambiar el gato (#) por punto (.)
const $l = document.querySelector('.location');

async function displayUser(username) { // Faltaba async 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);

  // Se necesitan template literals (``) y no apostofe (''), 
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`; // Faltaba punto y coma (;) 
}

displayUser('stolinski').catch(handleError);