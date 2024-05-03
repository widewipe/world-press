const exp = require("express");
const path = require("path");
const ejs = require("ejs");

const PORT = 3000;
const app = exp();
app.use(exp.static(path.join(__dirname + "/public")));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/home", { data: data });
});

app.get("/world", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=world&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.get("/nation", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.get("/business", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.get("/tech", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=tech&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.get("/entertainment", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.get("/sports", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.get("/science", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=science&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.get("/health", async (req, res) => {
  const result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07"
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: req.route.path });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
