const express = require("express");
const router = express.Router();

//GET
router.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

//POST
router.post("/", (req, res) => {
  res.json({ data: `post ${req.body.data}` });
});

//UPDATE
router.put("/:id", (req, res) => {
  res.json({ data: `update ${req.params.id}` });
});

//DELETE
router.delete("/:id", (req, res) => {
  res.json({ data: `delete ${req.params.id}` });
});

module.exports = router;
