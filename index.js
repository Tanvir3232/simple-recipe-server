const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
app.get('/',(req,res) =>{
    res.send('Chef Server is Running');
});
app.get('/chefs',(req,res)=>{
    res.send(chefs);
})
app.listen(port,()=>{
    console.log(`Chef API is runnning on port: ${port}`);
})
