const mysql = require("./pool_promise");
let sql = "select *  from customer";

mysql.query(sql).then((result) => console.log(result));