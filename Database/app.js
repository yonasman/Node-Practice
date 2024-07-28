const express = require("express")
const mysql2 = require("mysql2")

// create server
const app = express();

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
    // connection.query(productDesc,(err,results,field) => {
    //     if(err) {
    //         console.log(err)
    //     }
    //     console.log(field);
    // })

    // create price table
    const createProductPrice = "create table if not exists ProductPrice(price_id int auto_increment, product_id int(11) not null, starting_price varchar(255) not null, price_range varchar(255) not null, PRIMARY KEY (price_id), FOREIGN KEY (product_id) REFERENCES Products(product_id))"
    // execute the query
    connection.query(createProductPrice,(err,results,field) => {
        if(err) {
            console.log("Error",err);
        }
        
    });

    res.send("Table created!");
})



// listen to port
const PORT = 30001 
app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
})