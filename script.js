const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (replace with your own authentication logic)
  if (username === 'root' && password === 'toor') {
    alert('Login successful!');
    // Redirect to another page or perform other actions after successful login
  } else {
    alert('Invalid username or password!');
  }
});
