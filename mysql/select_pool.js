const pool = require("./pool_promise");

pool.getConnection((err,connection)=>{
   pool.query("select * " +
      "from customer", (err,result,fields) =>{
         if(err) console.log(err);
         console.log(result);
   });
   connection.release();
});