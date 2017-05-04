var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('the');
});
app.listen(process.env.PORT,function(){
    console.log('yes');
});