#!/usr/bin/node

const req = require("request");

const apiUrl = "https://swapi-api.alx-tools.com/api/films/";

const characterId = 18;

//Make a get request to fetch data from API
req.get(apiUrl).on((response) => {
  //confirm is response is active(code:200)
  if (response === 200) {
    const data = response.data;
    let movieCount = 0;

    //loop through the films in the API
    data.films.forEach((films) => {
      if (films.character_ids.includes(characterId)) {
        movieCount++;
      }
    });
    console.log(`${movieCount}`);
  } else {
    console.error("Failed to fetch data from API");
  }
});
