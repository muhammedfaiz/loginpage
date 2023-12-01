const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    if(!req.session.user_id){
        return res.render('home',{login:false,username:"Please Login to continue...."});
    }else{
        return res.render('home',{login:true,username:req.session.username});
    }
});




module.exports=router;