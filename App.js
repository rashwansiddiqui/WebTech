const express=require('express')

var app=express()
//http://localhost:3000/
app.get('/',(req, res)=>{
    res.send("Good morning class")
})
//http://localhost:3000/Books
app.get('/Books',(req, res)=>{
    res.send("We welcome you to our books section")

})
//http://localhost:3000/Students
app.get('/Students',(req,res)=>{
    res.send("<h1>We welcome you to students section</h1>")

})
app.post('/',(req, res)=>{
    res.send("You just sent a message to the server")
})
//http://localhost:3000/Students/4/books/70
app.get('Students/:studentid/books/:bookid',(req,res)=>{
    res.send(req.params)
})
var server=app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})