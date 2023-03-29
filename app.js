require('dotenv').config();;
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/register", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", ()=> {console.log("Houve um erro")})
db.once("open", ()=>{console.log("banco carregado")})

app.use('/user', express.json(), userRouter)

app.listen(process.env.PORT, () => { console.log("SERVIDOR RODANDO")})