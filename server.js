/*var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('the');
});
app.listen(process.env.PORT,function(){
    console.log('yes');
});*/
var t=require('moment');

var strings="the men is not a date this not a date 9879";
var reg=/\d\d\d\d\d\d\d\d\d\d\d\d\d/;


var datess=Date.now();
var ret;

if(strings.match(reg)){
    var time=strings.match(reg);
    var dates=parseInt(time[0]);
    var times=t(dates).format('MMMM Do YYYY');
    ret={
        "unix":time[0],
        "natural":times
        
    }
    
    
    
    
}
    else {
        ret={
            "unix":null,
            "natural":null
        }
    }
    console.log(ret);

    
