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
consdocument.addEventListener('DOMContentLoaded', function () {
   
    const loginButton = document.getElementById('login-btn');
    

    loginButton.addEventListener('click', function () {
     
        window.location.href = 'login.html'; // Replace 'login.html' with the actual URL of your login page
    });


    const signupButton = document.getElementById('signup-btn');
    

    signupButton.addEventListener('click', function () {

        window.location.href = 'signup.html';
    });
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

 
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;

    if (!username || !password) {
        alert('Username and password are required');
    } else {
        // Submit the form or perform further actions
        alert('Signup successful!');
    }
});
