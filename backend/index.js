const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();
const purchaseRouter = require("./routers/purchaseRouter");

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

app.use(cors());
app.use(bodyParser.json());

// Set up routes
app.use("/", purchaseRouter);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
