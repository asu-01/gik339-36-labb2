
const localUrl = "http://localhost:3000/users" 
/*const users = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(getUsers());
  }, 100);
});*/

/*const users = getUsers();

// Skapar uppkoppling mot server och översätter response-objektet till en array.
async function getUsers () {
  const response = await fetch(localUrl);
  const users = await response.json();
  console.log(users);
  return users;
}*/

function loadUrl (url){
  return new Promise(async function ( resolve, reject ) {
    const getResolve = await fetch(url);

    resolve(getResolve.json())

    /* if (!resolve) {
      reject(console.log("Hämtning av data misslyckades"));
    } */
  });
}



//Creates the 
const createUl = `<ul> Hej </ul>`;
document.body.insertAdjacentHTML("afterbegin", createUl);

const promise = loadUrl(localUrl);

// ---------------------------- //
promise.then((users) => {
  console.log(users);

  
  // Fortsätt här
  users.forEach(user => {
    const html = `<div class="list_item col-sm" style="border: 2px solid ${user.color}">
    <p class="col-sm"> Username: ${user.username}  </p>
    <p class="col-sm"> First Name: ${user.firstName} </p> 
    <p class="col-sm"> Last Name: ${user.lastName}  </p>
    </div>`;
    console.log(html);

    document.getElementById("listContainer").insertAdjacentHTML('beforeend', html);
  });
})
// ------------------------- //

/*const createUl = `<ul> Hej </ul>`;

document.body.insertAdjacentHTML("afterbegin", createUl);

// Fortsätt här
for (i = 0; i < users.length ; i++) {
  const createIl = `<il>${users[i]}</il>`;
  document.ul.insertAdjacentHTML("beforeend", createIl);
}

const setColor = document.getElementsByTagName("il");

for (element in setColor) {
  element.style.backgroundColor == users.color;
}*/

