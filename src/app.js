const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
