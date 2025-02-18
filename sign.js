
function validateSignup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    const usernamePattern = /^saji[a-zA-Z]{2}\d+@rmkcet\.ac\.in$/;


    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*@).+$/;


    if (!usernamePattern.test(username)) {
        alert("Invalid username.");
        return false;
    }


    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one letter, one digit, and the '@' symbol.");
        return false;
    }


    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return false;
    }


    alert("Sign Up successful!");
    return true;
}
