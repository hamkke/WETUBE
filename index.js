import "core-js";
const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = ()=> console.log(`Listening on: http://localhost:${PORT}`);


const  handleHome = (req, res) => res.send('HELLO');

// function handleProfile(req, res){
//     res.send('hohohoho');
// } 아래는 es6버전
const handleProfile = (req, res) => res.send('hohohoho'); 


app.get("/", handleHome);
app.get("/profile", handleProfile);


app.listen(PORT, handleListening);