const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// You need a post route for api/googlebooks - should return all saved books as JSON
app.get("/api/googlebooks", function (req, res) {
  res.send("GET request to the homepage");
});

// You need a get route for api/googlebooks - which will be used to save a new book to the database
app.post("/api/googlebooks", function (req, res) {
  res.send("POST request to the homepage");
});

// `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`
app.delete("/api/googlebooks/:id", function (req, res) {
  res.send("DELETE request to homepage");
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
