const sql = {
    boardList : "Select * from board",
    boardGet  : "Select * from board where ?",
    boardupdate : "insert into board set ?",

}   
module.exports = sql;