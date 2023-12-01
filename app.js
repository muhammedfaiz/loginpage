const express = require("express");
const app = express();
const homeRouter=require('./routes/home');
const loginRouter=require("./routes/auth");
const session = require("express-session");


app.use(session({
    secret:"This is my seceret",
}));

app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Expires', '0');
    next();
  });
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));  
app.use('/',homeRouter);
app.use('/user',loginRouter);

app.listen(5000,()=>{
    console.log("Server has started at port: 5000");
})