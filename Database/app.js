const express = require("express")
const mysql2 = require("mysql2")

// create server
const app = express();

// body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Create connection with database
const connection = mysql2.createConnection(
    {
        user : "yonman",
        password: "0000",
        host : "127.0.0.1",
        database : "node-practice"
    }
)

// connect
connection.connect((err) => {
    if(err) {
        console.log("Error",err);
        return
    } else {
        console.log("Connected to mysql db")
    }

})


// Create tables
app.get("/submit",(req,res) => {

    // const createProducts = "create table if not exists Products(product_id int auto_increment, product_url varchar(255) not null, product_name varchar(255) not null, PRIMARY KEY(product_id))"
    // connection.query(createProducts,(err,results,fields) => {
    //     if(err) console.log(err);
    //     console.log(results)

    // })
    // const productDesc = "create table if not exists ProductDescription(desc_id int auto_increment, product_id int not null, product_brief_desc text not null, product_desc text not null, product_image varchar(255) not null, product_link varchar(255) not null, PRIMARY KEY (desc_id), FOREIGN KEY (product_id) REFERENCES Products(product_id))"

    // execute
    // connection.query(productDesc,(err,results,fields) => {
    //     if(err) {
    //         console.log(err)
    //     }
    //     console.log(field);
    // })

    // create price table
    // const createProductPrice = "create table if not exists ProductPrice(price_id int auto_increment, product_id int(11) not null, starting_price varchar(255) not null, price_range varchar(255) not null, PRIMARY KEY (price_id), FOREIGN KEY (product_id) REFERENCES Products(product_id))"
    // // execute the query
    // connection.query(createProductPrice,(err,results,fields) => {
    //     if(err) {
    //         console.log("Error",err);
    //     }

    // });

    res.send(createProductPrice);
})

// post handler
app.post("/add",(req,res) => {
    const iphoneId = req.body.iphoneId
    const imagePath = req.body.imagePath
    const url = req.body.iphoneLink
    const iphoneTitle = req.body.iphoneTitle
    const startingPrice = req.body.startingPrice
    const priceRange = req.body.priceRange
    const briefDesc = req.body.briefDesc
    const fullDesc = req.body.fullDesc

    // inserting to db
    const insertProducts = `INSERT INTO Products(product_url,product_name) VALUES('${url}','${iphoneTitle}')`

    // execute the query
    connection.query(insertProducts,(err,results)=> {
        if(err) {
            console.log(err)
        }
        console.log(results);
    })
    res.send("posted")
})

// listen to port
const PORT = 3001 
app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
})