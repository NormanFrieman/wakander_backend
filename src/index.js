const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

console.log(`Listening port: ${port}`);
app.listen(port);