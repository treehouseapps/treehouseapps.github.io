var count = document.getElementById("no");
var payment = document.getElementById("bi");
var warn = document.getElementById("ow");
var bill = 0;

function s(){
const hi = setInterval(function()
{ count.value++;
  if(count.value == 6){
      alert("$10 added to your bill")
      bill = bill + 10; 
      payment.value = bill;
      count.value = 0;
      clearInterval(hi);
  
      if(bill > 10){
        payment.style.color = "red";
        warn.innerHTML = "Dude it is increasing just pay !";
      }  
  }  
}, 1000);

}
function r(){
if(payment.value > 5){
payment.value = 0;
bill = 0;
warn.innerHTML = "";
alert("finally ... Bill Payed");
payment.style.color = "black";
}
else{ alert("Relax man ... there is no bill to pay"); }
}
