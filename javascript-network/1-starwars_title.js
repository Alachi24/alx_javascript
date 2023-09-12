#!/usr/bin/node
//create a const of request and url
const req = require("request");

const id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

//using "get" to access the url from the source
req
  .get(url, { encoding: "utf-8" })

  .on("data", (data, body) => {
    const response = JSON.parse(data, body);
    console.log(response.Title);
  });
