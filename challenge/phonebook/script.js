var nam = document.getElementById('name');
var phone = document.getElementById('phone');
var a = document.getElementById("na");
var b = document.getElementById("ph");
var display = document.getElementById("na");
var sorte = document.getElementById("sort");
let sorted = false;
var data = [{
    name: "beki",
    number: "0977777777",
}];
displayContacts();

function save() {
    if (nam.value == "" || phone.value == "")
        alert("Who do u think u are...??");
    else {
        data.push({
            name: nam.value,
            number: phone.value
        });
        alert("New fella joined");
        nam.value = "";
        phone.value = "";
        displayContacts();
    }
}
function sort() {
    if (sorte.value == "Assending") {
        assending();
        sorted = "Assending";
    } else {
        sorted = "Decending";
        decending();
    }
    displayContacts();
};


function displayContacts() {
    if (sorted == "Assending") assending()
    else if (sorted == "Decending") decending()

    display.innerHTML = "";
    data.forEach((contact) => {
        let data = `<div id='contactDetail'> 
        <div> ${contact.name} <br> <sub> ${contact.number} </sub></div> </div>`;
        let li = document.createElement("p");
        li.innerHTML = data;
        display.append(li);

    });
}
function assending() {
    sorted = "Assending";
    data.sort((first, second) => {
        let testA = first.name.toLowerCase();
        let testB = second.name.toLowerCase();
        if (testA < testB) return -1;
        if (testA > testB) return 1;
        displayContacts();
    });
}

function decending() {
    sorted = "Decending";
    data.sort((first, second) => {
        let testA = first.name.toLowerCase();
        let testB = second.name.toLowerCase();
        if (testA < testB) return 1;
        if (testA > testB) return -1;
        displayContacts();
    });
}