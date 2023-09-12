#!/usr/bin/node

const req = require("request");

const url = "https://intranet.alxswe.com/";

req
  .get(url, { encoding: "utf-8" })

  .on("response", (response) => {
    console.log("code:", response.statusCode);
  });
