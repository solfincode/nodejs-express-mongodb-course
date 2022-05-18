/* Vanilla Node js 
//import http module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(url, method);
});

//setup port
const PORT = 8000;

//listening at server
server.listen(PORT, () => console.log(`server is listening at ${PORT}`));
*/

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
const cors = require("cors");

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//import router
const homeRouter = require("./routes/Home");
const BootcampRouter = require("./routes/Bootcamp");

//routes
app.use("/", homeRouter);
app.use("/api/bootcamp", BootcampRouter);

//listening server
app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
