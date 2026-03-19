const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

// Route files
const usersRoute = require("./routes/users");
const uploadsRoute = require("./routes/uploads");
const adminRoute = require("./routes/admin");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main logical routes for interacting with Database
app.use("/api/users", usersRoute);
app.use("/api/uploads", uploadsRoute); // Notice this handles /api/uploads vs old /api/upload
app.use("/api/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
