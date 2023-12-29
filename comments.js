// Create web server with
// Express.js
// Morgan
// Body-Parser
// Mongoose
// Nodemon
// Dotenv
// Cors
// Bcryptjs
// Jsonwebtoken
// Passport
// Passport-jwt
// Validator
// Use Postman to test routes
// Use Robo 3T to check database
// Use Heroku to deploy server
// Use Github to push to repo

// Import packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Import routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const comments = require("./routes/api/comments");

// Initialize app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database configuration
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB connected!"))
	.catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

// Set port
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
