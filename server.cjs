require("dotenv").config();
const axios = require("axios");
const app = express();
const express = require("express");
const client = require("./db/client.cjs");
const { getFlavors } = require("./db/getFlavors.cjs");

app.use(express.json());

client.connect();

app.get("/api/flavors", async (req, res, next) => {
  try {
    const flavors = await getFlavors();
    res.json(flavors);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
