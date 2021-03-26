const http=require('http')

var dt = require('./myfirstmodule')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'})
    res.write("Name: "+dt.PrintMyName())

    res.end(" \n Killing response object here")
}

).listen(8080, ()=> {
    console.log("The server is running on port 8080")

})


