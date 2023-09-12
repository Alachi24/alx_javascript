#!/usr/bin/node

const req = require("request");

const apiUrl = process.argv[2];

const characterId = 18;

//Make a get request to fetch data from API
req(apiUrl, (error, response, body) => {
  //confirm is response is active(code:200)
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    let movieCount = 0;

    //loop through the films in the API
    data.films.forEach((films) => {
      if (films.character_ids.includes(characterId)) {
        movieCount++;
      }
    });
    console.log(`${movieCount}`);
  } else {
    console.error("Failed to fetch data from API", error);
  }
});
