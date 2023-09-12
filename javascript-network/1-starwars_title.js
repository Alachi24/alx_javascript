#!/usr/bin/node
//create a const of request and url
const req = require("request");

const id = process.argv[3];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

//using "get" to access the url from the source
req
  .get(url, { encoding: "utf-8" })

  .on("data", (data) => {
    const response = JSON.parse(data);
    console.log(response.name);
  })

  .on("response", (response) => {
    console.log("code:", response.statusCode);
  });
