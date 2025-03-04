document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block";
        existingUserButton.addEventListener("click", function () {
            alert(`Logged in as ${savedUsername}`);
        });
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Fix: Correct method name
        const username = usernameInput.value;
        const password = passwordInput.value; // Fix: Correct variable name

        if (username && password) { // Fix: Use correct variable name
            alert(`Logged in as ${username}`);

            if (checkbox.checked) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }
        } else {
            alert("Please enter both username and password");
        }
    });
});
