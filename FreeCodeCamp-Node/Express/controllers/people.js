const {people} = require("../data")

const getPeople = (req,res)=> {
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res)=>{
    const user = req.body
    // people.push(user)
    // console.log(user.name)
    if(user.name) {
        res.status(200).send(`Welcome ${user.name}`)
    } else {
        res.status(401).send(`unauthorized`)
    }
    
}

// update person
const updatePerson = (req,res) => {
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
}

// delete
const deletePerson = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const peoples = people.find((person) => person.id === Number(id));
    // console.log(peoples)
    if(!peoples) {
        res.status(404).send(`No person found with id = ${id}`)
    }
    const leftPeoples = people.filter((person) => person.id !== Number(id))
    res.status(200).send(leftPeoples);
}
module.exports = {getPeople,createPerson,updatePerson,deletePerson}