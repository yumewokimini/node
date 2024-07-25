
const mysql = require("mysql2");

const conn = {  host: "127.0.0.1",
                port: "3306",
                user: "hr",
                password: "hr",
                database: "shop" };

let connection = mysql.createConnection(conn);

const id = 1;
const email = "moko@mokokoworld.com"
const address = "모코코"

let sql = `update customer set ?
                           where id = ?`;
connection.query(sql, [{email,address},id], (err,result,fields) =>{
                    if(err) console.log(err);
                    if(result.affectedRows == 1){
                        console.log("success updateresult");
                    }else{
                        console.log("faill update")
                    }
});

connection.end();
