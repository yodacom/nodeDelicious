const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
	const wes = { name: "wes", age: 100, cool: true };
  // res.send('Hey! It works!');
  // res.json(wes);
	// res.json(req.query);
  res.render("hello", {
    name:"wes",
    dog: req.query.dog
  });
});


router.get("/reverse/:name", (req, res) => {
	const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
