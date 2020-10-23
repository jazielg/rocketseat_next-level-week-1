import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Diego", "Alan"]);
});

app.listen(3333);
