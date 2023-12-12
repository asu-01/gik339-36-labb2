
const localUrl = "http://localhost:3000/users" 
const users = getUsers();

// Skapar uppkoppling mot server och översätter response-objektet till en array.
async function getUsers () {
  const response = await fetch(localUrl);
  const users = await response.json();
  return users;
}
console.log(users);

const createUl = `<ul> Hej </ul>`;

document.body.insertAdjacentHTML("afterbegin", createUl);

// Fortsätt här
for (i = 0; i < users.length ; i++) {
  const createIl = `<il>${users[i]}</il>`;
  document.ul.insertAdjacentHTML("beforeend", createIl);
}

