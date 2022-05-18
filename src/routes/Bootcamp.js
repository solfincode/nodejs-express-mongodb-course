const express = require("express");
const router = express.Router();

//controllers
const {
  getBootcamps,
  postBootcamps,
  putBootcamps,
  deleteBootcamps,
} = require("../controllers/Bootcamp");

//GET
router.get("/", getBootcamps);

//POST
router.post("/", postBootcamps);

//UPDATE
router.put("/:id", putBootcamps);

//DELETE
router.delete("/:id", deleteBootcamps);

module.exports = router;
