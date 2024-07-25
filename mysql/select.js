const pool = require("./pool_promise");

pool.query("select * " +
                 "from customer", (err,result,fields) =>{
                    if(err) console.log(err);
                    console.log(result);
});

