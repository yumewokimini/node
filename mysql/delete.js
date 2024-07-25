const pool = require("./pool_promise");
const id = 6;

let sql = `delete from customer 
                  where id = ?`;
                  pool.query(sql, id, (err,result,fields) =>{
                    if(err) console.log(err);
                    if(result.affectedRows == 1){
                        console.log("success updateresult");
                    }else{
                        console.log("faill update")
                    }
});


