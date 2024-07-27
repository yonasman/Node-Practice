const express = require("express");
const path = require("path");
const {products} = require("./product")
const app = express();

// // get request
// app.get("/",(req,res) => {
//     res.status(200).send("Home Page");
// })
// app.all("*",(req,res) => {
//     res.status(404).send("<h1>Not Found</h1>")
// })
// const filePath = path.resolve(__dirname,"../Server/index.html")
// serving static file
// app.use(express.static("../Server"))



// working with api
app.get("/",(req,res) => {
    res.send("<h1>Home page</h1><a href='/api/products'>Products</a>")
})

// product page
app.get("/api/products",(req,res) => {
    const newProducts = products.map((product) => {
        const {id,name,price,image} = product;
        return  {id,name,price,image};
    })
    res.json(newProducts);
})
// Get single product
app.get("/api/products/:productId",(req,res) => {
    const {productId} = req.params
    const singleProduct = products.find((product) =>(product.id === productId))
    if(!singleProduct) {
        return res.status(404).send("<h1>Product Not Found</h1>")
    }
    // console.log(singleProduct)
    return res.json(singleProduct);
})

// working with parameters
app.get("/api/v1/query",(req,res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search))
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    res.status(200).json(sortedProducts);
})

// listen to port
app.listen(3000,() => {
    console.log("Listening to port 3000")
})