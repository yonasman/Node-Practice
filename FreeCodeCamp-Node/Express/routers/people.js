const express = require("express");
const router = express.Router()
const {people} = require("../data")

router.get("/",(req,res)=> {
    res.status(200).json({success:true,data:people})
})
router.post("/add",(req,res)=>{
    const user = req.body
    // people.push(user)
    // console.log(user.name)
    if(user.name) {
        res.status(200).send(`Welcome ${user.name}`)
    } else {
        res.status(401).send(`unauthorized`)
    }
    
})
// put method
router.put("/update/:id",(req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    const peoples = people.filter((people) => (people.id) === Number(id))
    if(!peoples) {
        res.status(404).json({success:false})
    } 
    const newPeople = peoples.map((person) => {
            person.name = name
            return person
    })
    res.status(200).send(people)
})
// delete method

router.delete("/remove/:id",(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const peoples = people.find((person) => person.id === Number(id));
    // console.log(peoples)
    if(!peoples) {
        res.status(404).send(`No person found with id = ${id}`)
    }
    const leftPeoples = people.filter((person) => person.id !== Number(id))
    res.status(200).send(leftPeoples);
})

module.exports = router