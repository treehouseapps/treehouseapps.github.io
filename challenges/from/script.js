const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
        myForm.submit();
    }
});

function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById("name");
    nameInput.style.borderColor = "black"

    if (nameInput.value.length < 5) {
        alert("Name is too short.");
        nameInput.style.borderColor = "red"
        isValid = false;
    }

    const emailInput = document.getElementById("email");
    if (!validateEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        emailInput.style.borderColor = "red"
        isValid = false;
    }
    const passwordInput = document.getElementById("password");
    const cpasswordInput = document.getElementById("cPassword");
    if (cpasswordInput.value != passwordInput.value) {
        cpasswordInput.style.borderColor = "red"
        isValid = false;
    }
    const dateInput = document.getElementById("date");
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    if (selectedDate >= today) {
        alert("Date of birth must be a date in the past.");
        isValid = false;
    }
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (fileExtension !== 'png' && fileExtension !== 'jpg') {
            alert("Please upload a file in PNG or JPG format.");
            isValid = false;
        }
    }

    const selectedgender = document.querySelector('input[name="gender"]:checked');
    if (!selectedgender) {
        alert("Please select gender ");
        isValid = false;
    }
    return isValid;
}

function validateEmail(email) {
    const re = /^[^s@]+@[^s@]+.[^s@]+$/;
    return re.test(email);
}
