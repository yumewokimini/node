const express = require("express");
const userRouter = require("./routes/user.js");
const productRouter = require("./routes/product.js");
const cors = require('cors')//set1
const morgan = require("morgan");
const session = require("express-session");
const fileStore = require("session-file-store")(session);


const app = express();
const port = 3000;

app.use(cors());//set1
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(morgan("combined"));
app.use(morgan(":date[] : methor:url"));

app.use(
    session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
    httpOnly: true,//쿠키 섹션
    //secure: true,
    maxAge: 60000,
},
    store: new fileStore(),
}));

app.get("/", (req, res) => {// next 입력시 forword 개념
    res.send("hello world!");
});

app.use("/member",userRouter);
app.use("/product",productRouter);

app.listen(port, () => {
    console.log(`server runing http://localhost:${port}`);
});



