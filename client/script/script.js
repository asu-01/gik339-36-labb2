const localUrl = "http://localhost:3000/users";

// ------------------------------------ TA BORT?
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

// -------------------------------------

// Skapar uppkoppling mot server och översätter response-objektet till en array.
function loadUrl(url) {
  return new Promise(async function (resolve, reject) {
    const getResolve = await fetch(url);

    resolve(getResolve.json());

    // Kontrollera om denna fungerar!!!!! Lägga till err.message?
    if (!resolve) {
      reject(console.log("Hämtning av data misslyckades"));
    }
  });
}

const promise = loadUrl(localUrl);

promise.then((users) => {
  console.log(users);

  // Lägger till div-element för output av users på hemsidan med styling. OBS! mer styling finns i css-filen.
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
