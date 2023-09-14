#!/usr/bin/node

const request = require("request");

const url = "https://swapi-api.alx-tools.com/api/films/";
const character_id = "18";

request(url, function (error, response, body) {
  const count = JSON.parse(body).results.filter((film) =>
    film.characters.includes(
      `https://swapi-api.alx-tools.com/api/people/${character_id}/`
    )
  ).length;

  console.log(`${count}`);
});
