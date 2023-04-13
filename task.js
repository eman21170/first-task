import express from "express";
import { engine } from 'express-handlebars';
import  {studentss} from "./database/usersarray.js";
import  userssRouter from "./routers/usersrouter.js";

const app=express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './temp');

app.use('/students',userssRouter);


  

app.listen(2000)