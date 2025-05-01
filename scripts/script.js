// Dummy credentials for testing
const dummyUser = {
    username: "testuser",
    email: "testuser@example.com",
    password: "password123"
};

// Save sign-up form submission
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("new-username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("new-password").value;

        // Basic validation (can be expanded)
        if (!username || !email || !password) {
            alert("Please fill all fields.");
            return;
        }

        // Save user details to localStorage
        const userData = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem("rbrvmUser", JSON.stringify(userData));

        alert("Sign-up successful! You can now login.");
        // Redirect to login page
        window.location.href = "login.html";
    });
}

// Handle login form submission
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        // Retrieve stored user from localStorage
        let storedUser = localStorage.getItem("rbrvmUser");
        if (storedUser) {
            storedUser = JSON.parse(storedUser);
        } else {
            // If no user stored, use dummy credentials for test
            storedUser = dummyUser;
        }

        if (username === storedUser.username && password === storedUser.password) {
            alert("Login successful! Welcome, " + username + ".");
            // Redirect to homepage or dashboard (customize as needed)
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
}