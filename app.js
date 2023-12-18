const express = require("express");
const ejs = require("ejs");
const request = require("request");

const app = express();
app.set('view engine','ejs');

app.use(express.static(__dirname+"/public"));


app.get("/",function(req,res){
    
    request.get({
        url: 'https://api.api-ninjas.com/v1/quotes?category=success',
        headers: {
          'X-Api-Key': '7GowTq9g0cdlyloUBMlZjw==m7ZfkIwWPneo9SoL'
        },
      }, function(error, response, body) {
        if(error) return console.error('Request failed:', error);
        else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else {
        
          let data = JSON.parse(body)
          res.render("home",{quote:data[0].quote,author:data[0].author})
        }
      });
});











//7GowTq9g0cdlyloUBMlZjw==m7ZfkIwWPneo9SoL



app.listen("3000",function(){
    console.log("Servers started at port 3000")
});