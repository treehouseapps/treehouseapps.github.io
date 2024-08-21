let array = ['#FF0000', '#FFA500', '#FFFF00', '#273654', '#008000', '#0000FF', '#800080', '#808080', '#DC143C', '#FF8C00', '#FFFFE0', '#3CB371', '#00BFFF', '#9400D3', '#C0C0C0', '#FFC0CB',]
let toggleBehaviour = false
var box = document.getElementById("box")
var toggle = document.getElementById("toggle")
var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var e = document.getElementById("e")
var f = document.getElementById("f")
var img = toggle.querySelector("img")
var p = document.getElementById('p')
function toggleFunction() {
    toggleBehaviour = !toggleBehaviour
    toggleBehaviour ? img.src = "on.jpg" : img.src = "off.jpg"
    toggleBehaviour ? p.innerHTML = "ON" : p.innerHTML = "OFF"
}

box.addEventListener("click", (event) => {
    if (toggleBehaviour == true) {
        if (event.target.querySelector('div') == null) {
            let val = Math.floor(Math.random() * array.length)
            var item = event.target.id
            var ch = document.getElementById(item)
            ch.style.backgroundColor = array[val]
        }
    }
})