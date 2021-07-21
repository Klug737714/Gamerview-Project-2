const posts = require("./routes/posts");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://new_user:Wiseman2@cluster1.xieou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/posts", posts);

const port = 8181;
http.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
