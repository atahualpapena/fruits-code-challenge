const express = require("express");
const cors = require("cors");
app = express();
app.use(cors());
app.set("json spaces", 2);

PORT = 3000;

const data = [
  { name: "apple", colors: ["red", "green", "yellow"], inSeason: true },
  { name: "orange", colors: ["orange"], inSeason: true },
  { name: "grapes", colors: ["purple", "green"], inSeason: false },
  { name: "lime", colors: ["green"], inSeason: false },
  { name: "banana", colors: ["yellow"], inSeason: false },
  { name: "watermelon", colors: ["red"], inSeason: false },
  { name: "blueberry", colors: ["blue"], inSeason: true },
  { name: "coconut", colors: ["white"], inSeason: true }
];

app.get("/", (req, res) => {
  res.send("This is the Root, to get all fruits to to /fruits");
});

app.get("/fruits", (req, res) => {
  let limit = req.query.limit;
  let offset = req.query.offset;
  if (!limit && !offset) {
    limit = 5;
    offset = 1;
  }

  const startIndex = (offset - 1) * limit;
  const endIndex = offset * limit;
  const resultFruits = data.slice(startIndex, endIndex);
  res.json(resultFruits);
});

app.get("/fruits/name/:name", (req, res) => {
  const fruit = data.filter(f => f.name === req.params.name);
  return res.send(fruit);
});

app.get("/fruits/colors/:color", (req, res) => {
  const fruit = data.filter(f => f.colors.includes(req.params.color));
  return res.send(fruit);
});

app.get("/fruits/season/:inSeason", (req, res) => {
  const inSeason = fruits.filter(
    f => f.inSeason == JSON.parse(req.params.inSeason)
  );
  res.send(inSeason);
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
