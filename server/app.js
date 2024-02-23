const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const URI =
  "mongodb+srv://gouravkumarchanalia:gouravkumarchanalia@cluster0.q18dsik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/** create connection with database */
(async function () {
  await client.connect();
})();

client.on("connectionReady", (event) => {
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  /** logic */
  res.send("Okay");
});

module.exports = app;
