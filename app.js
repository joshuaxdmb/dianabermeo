require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const ejs = require('ejs')


app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/weight-loss',(req,res)=>{
    pp_id = process.env.PP_CLIENT_ID;
    res.render('weight-loss',{pp_id:pp_id})
})

app.listen(PORT,()=>{
    console.log('Application started on port 3000.')
})


