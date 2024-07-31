const express = require("express");
const cors = require("cors");

const boardRouter = require("./routes/board.js");

const app = express()
const port = 80;

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/board",boardRouter);

app.get("/", (req, res) => {
    // next 입력시 forword 개념
    res.send("my boardRouter");
  });

app.listen(port, () => {
    console.log(`server runing http://localhost:${port}`);
  });
  