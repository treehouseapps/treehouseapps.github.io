  const input = document.getElementById("input");
  var list = document.getElementById("list")
  const array = [];
  function submit(){
    if(input.value == "" || input.value == null){
      alert("Wat chu doin ")
    } else{
  array.push(input.value);
  alert("Submitted.... \n \n/* AD \n\n Treehouse is the best and you know that \n\n  Accept the TRUTH ");
  }}
  function view(){
    list.innerHTML = "<i class='i'>What a crazy text look </i> <br><br>"+array;
  }