const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool.js");

//조회
router.get("/", (req, res) => {
  mysql.query("boardList").then((result) => res.send(result));
});

//단건조회
router.get("/:boardNo", (req, res) => {
  let boardNo = req.params.boardNo;
  mysql.query("boardGet", boardNo).then((result) => res.send(result));
});
//입력
router.post("/", (req, res) => {
  mysql.query("boardInst", req.body).then((result) => res.send(result));
});

//수정
router.put("/:boardNo", (req, res) => {
  let boardNo = req.params.boardNo;
  mysql
    .query("boardupdate", [req.body, boardNo])
    .then((result) => res.send(result));
});

//삭제
router.delete("/:boardNo", (req, res) => {
  let boardNo = req.params.boardNo;
  mysql.query("boardDel", boardNo).then((result) => res.send(result));
});
module.exports = router;
