const app = require('express')();
const express = require('express');
const routers = require("./routers");
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.use("/api", routers);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));




app.get("/teste", (req, res) => {
  res.send("Hello World! 2");
})