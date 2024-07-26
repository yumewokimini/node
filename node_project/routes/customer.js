const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool.js");


// let allselect = "select * from customer";
// let oneselect = "select * from customer where id = ?";
// let insertdata = "insert into customer set ?";
// let updatadata = "update customer set ? where id = ?";
// let deletedata = "delete from customer where id ?";

//전체조회

router.get("/",(req,res)=>{
    mysql.query("customerList").then((result) => res.send(result));
//     connection.query("select * " +
//         "from customer", (err,result,fields) =>{
//            if(err) console.log(err);
        //    res.send(result);
//     });
//     connection.end();

});

//단건조회

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    mysql.query("customerGet",id).then((result) => res.send(result));
//     let sql = `select * from customer where id = ?`
//     let id = req.params.id;
//     connection.query(sql,id,(err,result,fields) =>{
//            if(err) console.log(err);
//            res.send(result);
//     });
//     connection.end();
});

//등록


router.post("/",(req,res)=>{
    mysql.query("customerInsert",req.body).then((result) => res.send(result));
//     let sql = `insert into customer set ?`;

//     connection.query(sql,req.body,(err,result,fields) =>{
//                     if(err) console.log(err);
//                     console.log(result.affectedRows,result.insertId);
//     });
//     connection.end();
});



//수정

router.put("/:id",(req,res)=>{
    let id = req.params.id;
    mysql.query("customerUpdata",[req.body,id]).then((result) => res.send(result));
    //     let sql =   `update customer set ?
//                  where id = ?`;

//     let id = req.params.id;          

//     connection.query(sql, [req.body,id], (err,result,fields) =>{
//                     if(err) console.log(err);
//                     if(result.affectedRows == 1){
//                         console.log("success updateresult");
//                     }else{
//                         console.log("faill update")
//                     }                   
//     });
//     connection.end();
});

//삭제

router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    mysql.query("customerDelete",{id}).then((result) => res.send(result));
//     let sql = `delete from customer where id = ?`;
//     let id = req.params.id;

//     connection.query(sql, id, (err,result,fields) =>{
//                     if(err) console.log(err);
//                     if(result.affectedRows == 1){
//                         console.log("success updateresult");
//                     }else{
//                         console.log("faill update")
//                     }
//                      res.sedStatus(500);
//     });
//     connection.end();
});

module.exports = router;