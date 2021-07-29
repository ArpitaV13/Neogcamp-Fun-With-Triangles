var input1=document.getElementById("input-text1");
var input2=document.getElementById("input-text2");
var input3=document.getElementById("input-text3");

var output=document.getElementById("output");
var outputHypo=document.getElementById("output-hypo");

var inputA=document.getElementById("input-a");
var inputB=document.getElementById("input-b");

var submitangles=document.getElementById("submit-angles");
var submitHypotenuse=document.getElementById("submit-hypotenuse");

function clickAngleHandler(){
    if(Number(input1.value)+Number(input2.value)+Number(input3.value)===180){
        output.innerText="Hurray! You can make a triangle with these angles."
    }
    else{
        output.innerText="Oops! These angles cannot make a triangle."
        
    }

}
submitHypotenuse.addEventListener('click',clickHypotenuseHandler);

function clickHypotenuseHandler(){
    var a=inputA.value;
    var prod=a*a;
    var b=inputB.value;
    var prod2=b*b;
    var c=Math.sqrt(prod2+prod);
    outputHypo.innerText=c;
   

}

submitangles.addEventListener('click',clickAngleHandler);
