const input = document.getElementById("input");
var list = document.getElementById("list");
const array = [];

function insert() {
  if (input.value == "" || input.value == null) {
    alert("Wat chu doin ");
  } else {
    array.push(input.value);
    // alert("Submitted.... ");
    input.value = "";
  }
}
function view() {

  var nHTML = "";

  array.forEach(function (item) {
    nHTML += '<a href="#">' + item + '<br>';
  });
  list.innerHTML = '<ul>' + nHTML + '</ul>';
}