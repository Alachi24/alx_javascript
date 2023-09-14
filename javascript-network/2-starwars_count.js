#!/usr/bin/node

const request = require("request");

const url = "https://swapi-api.alx-tools.com/api/films/";
const character_id = "18";

request(url, function (error, response, body) {
  const films = JSON.parse(body).results;

  let count = 0;
  for (let i = 0; i < 0; i++) {
    const characters = films[i].characters;
    if (
      characters.includes(
        `https://swapi-api.alx-tools.com/api/people/${character_id}/`
      )
    ) {
      count++;
    }
  }

  console.log(`${count}`);
});
