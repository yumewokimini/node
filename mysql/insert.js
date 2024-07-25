const pool = require("./pool_promise");

const name = "유관순"
const email = "b@b.b"
const phone = "123-4567-7891"
let sql = `insert into customer (name,email,phone) values ('${name}','${email}','${phone}')`;

pool.query(sql, (err,result,fields) =>{
                    if(err) console.log(err);
                    console.log(result.affectedRows,result.insertId);
});