const exp = require("express");
const path = require("path");
const ejs = require("ejs");

const PORT = process.env.PORT || 3000;
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

app.get("/category/:cat", async (req, res) => {
  const category = req.params.cat;
  const result = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=8484e5c5636400235a62f9f928ef1a07`
  );
  const data = await result.json();

  res.render("pages/categ", { data: data, cat: category });
})



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
