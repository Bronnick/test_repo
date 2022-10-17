const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));

const urlencodedParser = express.urlencoded({extended:false});
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});
app.post('/', urlencodedParser, function(request, response){
    if(!request.body) return response.statusCode(400);
    console.log(request.body);
    response.send(request.body.age);
});

app.get('/home/:hello', function(request, response){
    response.send(request.params["hello"]);
});

app.listen(3000);
