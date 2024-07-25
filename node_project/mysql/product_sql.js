const sql = {
    productLIst : "select * from product",
    productGet :"select * from product where prodnum = ?",
    productInsert :"insert into product set ?",
    productUpdate :"update product set ? where prodnum = ?",
    productDelete :"delete from product where ?",
}
module.exports = sql;