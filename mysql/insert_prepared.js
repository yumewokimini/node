const pool = require("./pool_promise");
const name = "김민수"
const email = "d@d.d"
const phone = "777-788-7778"
let sql = `insert into customer set ?`;

pool.query(sql,{name,email,phone},(err,result,fields) =>{
                    if(err) console.log(err);
                    console.log(result.affectedRows,result.insertId);
});
