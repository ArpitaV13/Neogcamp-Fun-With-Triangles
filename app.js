var input1=document.getElementById("input-text1");
var input2=document.getElementById("input-text2");
var input3=document.getElementById("input-text3");
var output=document.getElementById("output");

var submitBtn=document.getElementById("submit-btn");
function clickEventHandler(){
    if(Number(input1.value)+Number(input2.value)+Number(input3.value)===180){
        output.innerText="Hurray! You can make a triangle with these angles."
    }
    else{
        output.innerText="Oops! These angles cannot make a triangle."
        
    }

}

submitBtn.addEventListener('click',clickEventHandler);