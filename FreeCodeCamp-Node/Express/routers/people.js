const express = require("express");
const router = express.Router()
const {getPeople,createPerson,updatePerson,deletePerson} = require("../controllers/people")

router.get("/",getPeople)
router.post("/add",createPerson)
// put method
router.put("/update/:id",updatePerson)
// delete method

router.delete("/remove/:id",deletePerson)

module.exports = router