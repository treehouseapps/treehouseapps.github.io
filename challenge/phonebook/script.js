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
    var y;
    var z;
    data.map(x => y = x.name);
    data.forEach(x => z = x.number);
    var y_val = y;
    let p = document.createElement("p");
    p.innerHTML = y_val;
    na.appendChild(p);
    var z_val = z;
    let q = document.createElement("p");
    q.innerHTML = z_val;
    na.appendChild(q);
}
