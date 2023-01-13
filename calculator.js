const express = require('express');

const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));


//Bmi calulator 

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height*height);
    if(bmi<18.5){
        var a = ("Your BMi is " + bmi + ",so you are underweight");
    }
    if(bmi>18.5 && bmi<=24.9){
        var a = ("Your BMI is " + bmi + ", so you have a normal weight.")
        
    }
    
    if (bmi>24.9){
        var a= ("Your BMI is "+ bmi + ", so you are overweight.")
    }

    // console.log(a);
    res.send(a);
})

app.listen(3000,function(){
    console.log("Server will be start at 3000");
});