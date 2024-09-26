function validateForm() {
    // Get form fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Username validation
    if (username === "") {
        alert("Username must not be empty");
        return false;
    }

    // Email validation (using regex)
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    // Phone number validation (only 10 digits allowed)
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits long and only contain numbers");
        return false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@])[A-Za-z0-9&$#@]{7,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 7 characters long, include one uppercase letter, one digit, and one special character (&,$,#,@)");
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
