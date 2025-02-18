function validateLogin() {
    console.log("Login validation function called");

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernamePattern = /^saji[a-zA-Z]{2}\d+@rmkcet\.ac\.in$/;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*@).+$/;

    console.log("Username entered: ", username);
    console.log("Password entered: ", password);

    if (!usernamePattern.test(username)) {
        alert("Invalid username. Please use the format: sajiXX123@rmkcet.ac.in");
        console.log("Username validation failed.");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one letter, one digit, and the '@' symbol.");
        console.log("Password validation failed.");
        return false;
    }
}
