const express = require("express");
const db = require("./db");

const app = express();

const port = 4000;

function handleListening() {
  console.log("서버가 실행중입니다.");
}

app.listen(port, handleListening);
