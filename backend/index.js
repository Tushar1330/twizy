const express = require("express");
const app = express()
const port = 5000;
const mongoDb = require("./db");
mongoDb();
app.get("/", (req, res) => {
    res.send("Hello World");
})
app.listen(port, () => {
    console.log(`Example listening at port ${port}`);
})