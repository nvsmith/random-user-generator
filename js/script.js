// Step 7 of 7
// Practice Exercises: Intro to APIs

// Exercise #1
// fetch(), async/await syntax, .json(), function expression,
// innerHTML, for…of loop, createElement(), append()

// Exercise #2
// async functions, fetch, template literals, change event

// ----- Random User Generator API -----

const randomFolks = document.querySelector(".random-peeps"); // cards container
const selectUserNumber = document.querySelector("#users"); // drop-down list

// Begin communication between program & API.
const getData = async function (numUsers) {
  //   Get data from a selected number of random users.
  const usersRequest = await fetch(
    `https://randomuser.me/api?results=${numUsers}`
  );
  const data = await usersRequest.json();
  const userResults = data.results; // array of objects
  displayUsers(userResults);
};

// getData(1); optional: pass a default number of user cards to load.
getData();

// Display users with their name, country, and avatar
const displayUsers = function (userResults) {
  // Clear the cards container element.
  randomFolks.innerHTML = "";

  // Loop thru each user.
  for (let user of userResults) {
    // Parse the desired data
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;

    // Append each user's data to the webpage as a new card div.
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="user avatar" />
        `;
    randomFolks.append(userDiv);
  }
};

// Select number of users to fetch/display.
selectUserNumber.addEventListener("change", function (e) {
  const numUsers = e.target.value;
  getData(numUsers);
});
