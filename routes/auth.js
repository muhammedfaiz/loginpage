const express = require("express");
const router = express.Router();
const userData=require("../public/data");

router.get('/login',(req,res)=>{
    if(!req.session.user_id){
        return res.render('login',{status:true,message:''});
    }else{
        return res.redirect("/");
    }
    
});

router.post('/login',(req,res)=>{
    let data=req.body;
    let user=userData.find((user)=>data.username === user.username && data.password === user.password);
    if(!user){
        return res.status(401).render('login',{status:false,message:"Invalid username or password"});
    }else{
        req.session.user_id=user.id;
        req.session.username=user.username;
        return res.status(200).redirect('/');
    }
});

router.get("/logout",(req,res)=>{
    req.session.destroy();
    return res.redirect('/user/login');
});



module.exports=router;