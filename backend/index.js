const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
