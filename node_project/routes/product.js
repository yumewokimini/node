const express = require("express");
const router = express.Router();


// get /product?category=t1&price=20000
router.get("/",(req, res) => {
    const category = req.query.category;
    const price = req.query.price;
    const data = req.query;
    
    console.log(data);
    res.send(`${category} = ${price}`);
})

// get /product/1

router.get("/:prodid",(req, res) => {
    const prodid = req.params.prodid;    
    console.log(prodid);
    res.send(`${prodid}`);
})


// post /product josn 형식으로 파라미터 전송 : prodid,prodname,price
router.post("/",(req, res) => {

    const prodid = req.body.prodid;
    const prodname = req.body.prodname;
    const price = req.body.price;
    
    console.log(req.body);
    res.send(`${prodid} = ${prodname} = ${price}`);
})


router.put("/:prodid",(req, res) => {
    const prodid = req.params.prodid;
    const result = {...req.body,prodid};

    console.log(result);
    res.send(result);
})



router.delete("/:prodid",(req, res) => {
    const prodid = req.params.prodid;

    console.log(prodid);
    res.send(prodid);
});

module.exports = router;