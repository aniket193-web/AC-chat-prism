import express  from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import Route from "./routes/Route.js";
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();
const app=express();
const PORT=8000;

connection();
app.listen(PORT,()=>console.log("server is running"));

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); 


app.use('/',Route);


