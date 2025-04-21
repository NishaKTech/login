const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

// When "Signup" is clicked
signupBtn.onclick = function (e) {
    e.preventDefault();
    title.innerText = "Sign Up";
    nameField.style.display = "block";
    signinBtn.value = "Sign Up";
};

// When "Login" button is clicked
signinBtn.onclick = function (e) {
    if (signinBtn.value === "Sign Up") {
        // Submit sign-up form logic here
        alert("Signed Up Successfully!");
    } else {
        // Submit login form logic here
        alert("Logged In Successfully!");
    }

    // Reset back to Login mode
    title.innerText = "Login";
    nameField.style.display = "none";
    signinBtn.value = "Login";
};
