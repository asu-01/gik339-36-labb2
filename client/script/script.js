const localUrl = "http://localhost:3000/users";
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

function loadUrl(url) {
  return new Promise(async function (resolve, reject) {
    const getResolve = await fetch(url);

    resolve(getResolve.json());

    /* if (!resolve) {
      reject(console.log("Hämtning av data misslyckades"));
    } */
  });
}

//Creates the
// const createUl = `<ul> Hej </ul>`;
// document.body.insertAdjacentHTML("afterbegin", createUl);

const promise = loadUrl(localUrl);

// ---------------------------- //
promise.then((users) => {
  console.log(users);

  // Fortsätt här
  users.forEach((user) => {
    const html = `<div class="p-2 col-lg-4 m-3 list_item" style="border: 4px solid ${user.color}">
    <div class="p-2 m-2 list_item__descriptor"> <h3>Username:</h3> ${user.username}  </div>
    <div class="p-2 m-2 list_item__descriptor"> <h3>First Name:</h3> ${user.firstName} </div> 
    <div class="p-2 m-2 list_item__descriptor"> <h3>Last Name:</h3> ${user.lastName}  </div>
    </div>`;
    console.log(html);

    document.getElementById("listCard").insertAdjacentHTML("beforeend", html);
  });
});
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
