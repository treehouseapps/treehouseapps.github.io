
  var count = document.getElementById("no");
  var payment = document.getElementById("bi");
  var warn = document.getElementById("ow");
  
  var bill = 0;
  function s(){
    setInterval(function(){
    do{
  count.value++;}
  while (count.value > 6)
  if(count.value == 6){
    count.value = 0;
    bill = bill + 10; 
    payment.value = bill;
  }
  if (bill > 10){
    payment.style.color = "red";
    warn.innerHTML = "Dude it is increasing just pay !";
  }
  else if (bill < 10){
    payment.style.color = "black";
  }

}, 1000);
  }
  function r(){
    payment.value = 0;
    bill = 0;
    warn.innerHTML = "";
  }
