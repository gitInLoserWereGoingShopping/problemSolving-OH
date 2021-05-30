const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const db = require("./db");

app.use(express.json()); //sort of like bodyparser but within express -- parses incoming request with a JSON payload
app.use(express.static(path.join(__dirname, "../dist"))); //serves up this file path (the index.html within dist folder) by default

// get all items in DB

app.get("/groceries", (req, res) => {
  db.query('SELECT * FROM groceries', (err, groceries) => {
    if (err) {
      console.error(err.sqlMessage);
      res.status(500).end()
    }
    console.log(`server.js, app.get, db.query('select * from groceries'...:\n`, groceries);
    res.status(200).send(groceries)
  })
});

// add item to DB

app.post("/posty", (req, res) => {
  let item = req.body.GroceryItem;
  let qStr = `INSERT INTO groceries (item) VALUES ('${item}')`;
  db.query(qStr, (err) => {
    if (err) console.error(err.sqlMessage);
    res.status(200).end()
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
