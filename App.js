var express=require('express');
var R1=require('./RouteMod')

var app = express();

//http://localhost:3000/books
app.route('/books')

.get((req, res)=>{
    res.send('Choose a random book')
})
.post((req, res)=>{
    res.send('Add a book')
})
.put((req, res)=>{
    res.send('Update a book')
})
.delete((req,res)=>{
    res.send('Delete a book')
})
//http://localhost:3000/Students
app.use('/Students', R1)

var sarver=app.listen(3000,()=>{});