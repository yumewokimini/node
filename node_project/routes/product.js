const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool.js");


// get /product?category=t1&price=20000
router.get("/",(req, res) => {
    mysql.query("productLIst").then((result) => res.send(result));
})

// get /product/1
router.get("/:prodid",(req, res) => {
    const prodid = req.params.prodid;    
    mysql.query("productGet",prodid).then((result) => res.send(result));
})


// post /product josn 형식으로 파라미터 전송 : prodid,prodname,price
router.post("/",(req, res) => {
    mysql.query("productInsert",req.body).then((result) => res.send(result));

})


router.put("/:prodid",(req, res) => {
    const prodid = req.params.prodid;
    mysql.query("productUpdate",[req.body,prodid]).then((result) => res.send(result));
})



router.delete("/:prodid",(req, res) => {
    const prodnum = req.params.prodid;
    mysql.query("productDelete",{prodnum}).then((result) => res.send(result));
});

module.exports = router;