require("dotenv").config(); // this is required to allow use of environment variables

const express = require("express"); // grab express package
const app = express(); // instantiate express
const PORT = process.env.PORT ?? 3000;

const path = require("path"); // Require the "path" module

// Set EJS as the template engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  express.static("public", {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".css") || path.endsWith(".min.css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)); // listening on port:3000

app.get("/", (req, res) => {
  res.render("index"); // Render the "index" view
});

app.get("/AboutMe", (req, res) => {
  res.render("aboutme"); // Render the "index" view
});

app.get("/Services", (req, res) => {
  res.render("services"); // Render the "index" view
});

app.get("/Contact", (req, res) => {
  res.render("contact"); // Render the "index" view
});
