const express = require("express");
const app = express();
const port = 3000;
const schema = require("./schema.json");

const collections = [];

app.use(express.json());

app.get("/models", (req, res) => {
  res.send(schema.tables);
});

app
  .route("/collections")
  .get((req, res) => {
    res.send(collections);
  })
  .put((req, res) => {
    const { collectionName, modelId } = req.body;
    collections.push({ collection: collectionName, model: modelId });
    res.send(201);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
