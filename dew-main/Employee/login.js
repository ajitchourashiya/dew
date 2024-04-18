document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting
  
    // Retrieve the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform a basic check for authentication (replace with your own authentication logic)
    if (username === "admin" && password === "password") {
      // Redirect to another webpage upon successful login
      window.location.href = "Emplyoee.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  