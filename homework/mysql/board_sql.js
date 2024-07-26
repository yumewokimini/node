const sql = {
    boardList : "Select * from board",
    boardGet  : "Select * from board where boardNo = ?",
    boardInst : "insert into board set ?",
    boardupdate : "update board set ? where boardNo = ?",
    boardDel : "delete from board where boardNo = ?"
}   
module.exports = sql;