var nam = document.getElementById('name');
var phone = document.getElementById('phone');
var a = document.getElementById("na");
var b = document.getElementById("ph");

function save() {
    var data = [{}];
    data.push(
        dat = {
            name: nam.value,
            number: phone.value
        }
    );

    data.map(x => a.innerHTML = x.name);
    data.forEach(x => b.innerHTML = x.number);
}
