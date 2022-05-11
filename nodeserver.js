const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 970618;
var status = "578  870";
var number = "050015  054035  440807  027001  127728";  ;
var render = "563497  046457  559912  703812  036686";

//Set &amp; Call EJS
app.set('view engine','ejs')

//Back-End NodeJS Display
app.get("/s",(req,res) =>{
    res.send("สลากกินแบ่งรัฐบาล")
}) 
//Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index' , {userid : id, status : status, number : number, render : render})
})
//Open Serverclea
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})

