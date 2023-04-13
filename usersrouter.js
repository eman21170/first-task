import { Router } from "express";
import { studentss} from "../database/usersarray.js";

const router=new Router();
router.get('/',(req,res)=>{
    res.render("users",{studentss});
});
router.get('/create',(req,res)=>{
});
router.get('/update',(req,res)=>{
});
router.get('/delete',(req,res)=>{
});
router.get('/:id',(req,res)=>{
});

export default router;