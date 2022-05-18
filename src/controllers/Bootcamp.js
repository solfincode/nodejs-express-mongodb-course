//GET
exports.getBootcamps = (req, res, next) => {
  res.json({ msg: "hello world" });
};

//POST
exports.postBootcamps = (req, res, next) => {
  res.json({ data: `post ${req.body.data}` });
};

//PUT
exports.putBootcamps = (req, res, next) => {
  res.json({ data: `update ${req.params.id}` });
};

//DELETE
exports.deleteBootcamps = (req, res, next) => {
  res.json({ data: `delete ${req.params.id}` });
};
