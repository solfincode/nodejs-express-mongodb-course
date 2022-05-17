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
const PORT = 8000;
const app = express();
const cors = require("cors");

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//listening server
app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
