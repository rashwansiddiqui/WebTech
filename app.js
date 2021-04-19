const express = require('express');
const bodyParser = require('body-parser');
const product=require('./routes/product.route');
const mongoose=require('mongoose');
var app=express();
//***************************MongoDB connection here ***************************
mongoose.connect('/mongodb://localhost/productDB',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database')
})

.catch(err=>{
    console.log('cannot connect to database',err)
    process.exit()
})

//***************************MongoDB connection here ***************************

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/products',product);

app.listen(3000,()=>{
    console.log('server is up on port 3000')
});