var input1=document.getElementById("input-text1");
var input2=document.getElementById("input-text2");
var input3=document.getElementById("input-text3");

var outputAngles=document.getElementById("output-angles");
var outputHypo=document.getElementById("output-hypo");

var inputA=document.getElementById("input-a");
var inputB=document.getElementById("input-b");

var submitangles=document.getElementById("submit-angles");
var submitHypotenuse=document.getElementById("submit-hypotenuse");





function clickAngleHandler(){
    if(Number(input1.value)+Number(input2.value)+Number(input3.value)===180){
        outputAngles.innerText="Hurray! You can make a triangle with these angles."
    }
    else{
        outputAngles.innerText="Oops! These angles cannot make a triangle."
        
    }

}
submitHypotenuse.addEventListener('click',clickHypotenuseHandler);


function clickHypotenuseHandler(){
    console.log("reached");
    var a=inputA.value;
    var prod1=a*a;
    var b=inputB.value;
    var prod2=b*b;
    var c=Math.sqrt(prod2+prod1);
    outputHypo.innerText=c;
   

}

submitangles.addEventListener('click',clickAngleHandler);



