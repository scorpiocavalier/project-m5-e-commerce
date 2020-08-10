const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const PORT = 4000;

// Prepended routes
const productRoutes = require("./api/routes/products");

// Console logging requests with status
app.use(morgan("dev"));

// Allow extraction of json and urlencoded data from req.body
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Allow cross-origin data transfers
app.use(cors());

// Serve any asset data we have and define root directory
app.use(express.static("./server/assets"));
app.use("/", express.static(__dirname + "/"));

// Routes which should handle requests
app.use("/products", productRoutes);

// Error handling routes that do not exist
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
