const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const passport = require("passport");

// General Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
require("./config/passport")(passport);

// -------------------------------------

// Setup routes
const auth = require("./routes/api/auth");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const defaultRoutes = require("./routes/default");

app.use("/api/auth", auth);
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("*", defaultRoutes);
// ------------------------------------

app.listen(port, () => console.log(`Server live on port: ${port}`));
