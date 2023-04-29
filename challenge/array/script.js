const input = document.getElementById("input");
var list = document.getElementById("list");
const array = [];

function insert() {
  if (input.value == "" || input.value == null) {
    alert("Wat chu doin ");
  } else {
    array.push(input.value);
    alert("Submitted.... ");
    input.value = "";
  }
}
function view() {
  array.forEach(function (item) {
    let p = document.createElement("p");
    p.innerHTML = item;
    con.appendChild(p);
  });
}