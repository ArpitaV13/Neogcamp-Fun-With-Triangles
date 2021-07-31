// var btn1=document.getElementById('btn-1');
// btn1.addEventListener('click',areaHandler);

var radioBtns=document.querySelectorAll("areaCal");

function areaHandler(x){
  if(x==1){
    document.getElementById("output-area1").style.display="block";
    document.getElementById("output-area2").style.display="none";
    document.getElementById("output-area3").style.display="none";
    document.getElementById("output-area4").style.display="none";
  }
  if(x==2){
    document.getElementById("output-area2").style.display="block";
    document.getElementById("output-area1").style.display="none";
    document.getElementById("output-area3").style.display="none";
    document.getElementById("output-area4").style.display="none";
  }
  if(x==3){
    document.getElementById("output-area3").style.display="block";
    document.getElementById("output-area1").style.display="none";
    document.getElementById("output-area2").style.display="none";
    document.getElementById("output-area4").style.display="none";
  }
  if(x==4){
    document.getElementById("output-area4").style.display="block";
    document.getElementById("output-area1").style.display="none";
    document.getElementById("output-area2").style.display="none";
    document.getElementById("output-area3").style.display="none";
  }
  
   
}
