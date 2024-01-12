document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic validation - Check if the username and password are not empty
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;

    if (!username || !password) {
        alert('Username and password are required');
    } else {
        // Submit the form or perform further actions
        alert('Signup successful!');
    }
});
