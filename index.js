import express from "express";
import bodyparser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";




const __dirname=dirname(fileURLToPath(import.meta.url));
const port=3000;
const app=express();
let s="";
app.set("view engine", "ejs");
app.set("views", "./views"); 
function randomName(req,res,next){
    const firstNames = ["Alex", "Jamie", "Taylor", "Jordan", "Morgan", "Casey", "Peyton", "Robin", "Drew", "Skylar"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Lopez"];
  const f= firstNames[Math.floor(Math.random() * firstNames.length)];
  const  l= lastNames[Math.floor(Math.random() * lastNames.length)];
  s = `${f} ${l}`;
  console.log(`Generated random name: ${s}`);
  next();
}

app.get("/",(req,res)=>{
    res.render("index.ejs");
});


app.post("/submit",randomName,(req,res)=>{
    res.render("index.ejs",{
         name:s
    });

});


app.listen(port,()=>{
   console.log(`port number ${port}`);
});