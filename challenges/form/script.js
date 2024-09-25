const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
        myForm.submit();
    }
});
let iconn = false
function pshow() {
    iconn = !iconn
    iconn ? picon.className = "bi bi-eye" : picon.className = "bi bi-eye-slash"
    iconn ? password.type = "text" : password.type = "password"
}
function cpshow() {
    iconn = !iconn
    iconn ? cpicon.className = "bi bi-eye" : cpicon.className = "bi bi-eye-slash"
    iconn ? cpassword.type = "text" : cpassword.type = "password"
}
function ip() {
    picon.style.display = "block"
}
function icp() {
    cpicon.style.display = "block"
}
function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
    const selectedgender = document.querySelector('input[name="gender"]:checked');
    const fileInput = document.getElementById("file");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const pal = document.getElementById("pal");
    const cpasswordInput = document.getElementById("cPassword");
    nameInput.style.borderColor = "black"

    //Name
    if (nameInput.value.length < 5) {
        ual.style.display = "block";
        ual.innerText = "Name is too short.";
        nameInput.style.borderColor = "red"
        isValid = false;
    }
    else {
        ual.style.display = "none";
        nameInput.style.borderColor = "black"
    }

    //Email
    if (!validateEmail(emailInput.value)) {
        eal.style.display = "block";
        eal.innerText = "Please enter a valid email address.";
        emailInput.style.borderColor = "red"
        isValid = false;
    }
    else {
        eal.style.display = "none";
        emailInput.style.borderColor = "black"
    }

    //Password
    if (passwordInput.value.length < 2) {
        pal.style.display = "block";
        pal.innerHTML = "password must be 8 Characters"
        passwordInput.style.borderColor = "red"
        isValid = false;
    }
    else if (passwordInput.value.search(/[0-9]/) == -1) {
        pal.style.display = "block";
        pal.innerText = "password must include atleast 1 digit"
        passwordInput.style.borderColor = "red"
        isValid = false;
    }
    else if (passwordInput.value.search(/[a-z]/) == -1) {
        pal.style.display = "block";
        pal.innerText = "password must inclide atleast 1 lowercase"
        passwordInput.style.borderColor = "red"
        isValid = false;
    }
    else if (passwordInput.value.search(/[A-Z]/) == -1) {
        pal.style.display = "block";
        pal.innerText = "password must include atleast 1 uppercase"
        passwordInput.style.borderColor = "red"
        isValid = false;
    }
    else if (passwordInput.value.search(/[!\!\@\#\$\%\^\&\*\(\)\-\_\+\=]/) == -1) {
        pal.style.display = "block";
        pal.innerText = "password must include atleast 1 Special Character"
        passwordInput.style.borderColor = "red"
        isValid = false;
    }
    else {
        pal.style.display = "none";
        passwordInput.style.borderColor = "black"
    }

    //Confirm Password
    if (cpasswordInput.value !== passwordInput.value) {
        cpasswordInput.style.borderColor = "red"
        cpal.style.display = "block";
        cpal.innerText = "Password does not match"
        isValid = false;
    } else {

        cpal.style.display = "none";
        cpasswordInput.style.borderColor = "black"
    }

    //Date
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    if (selectedDate >= today) {
        dal.style.display = "block";
        dal.innerText = "Date of birth must be a date in the past.";
        dateInput.style.borderColor = "red"
        isValid = false;
    }
    else {
        dal.style.display = "none";
        dateInput.style.borderColor = "black"
    }

    //File
    const file = fileInput.files[0];

    if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (fileExtension !== 'png' && fileExtension !== 'jpg') {
            fal.style.display = "block";
            fal.innerText = "Please upload a file in PNG or JPG format.";
            isValid = false;
        }
        else {
            fal.style.display = "none";
            fileInput.style.borderColor = "black"
        }
    }

    //Gender
    if (!selectedgender) {
        gal.style.display = "block";
        gal.innerText = "Please select gender ";
        isValid = false;
    }
    else {
        gal.style.display = "none";
    }
    return isValid;
}

function validateEmail(email) {
    const re = /^[^s@]+@[^s@]+.[^s@]+$/;
    return re.test(email);

}
