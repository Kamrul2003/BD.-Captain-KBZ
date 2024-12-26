async function login() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMsg = document.getElementById("error-msg");

            const response = await fetch('https://script.google.com/macros/s/AKfycbyfr5fEymzVMkTSSuIH0-QvLovI9xwcrmNLbQCZt3wm4TXPkbHNiILmYTF5AavgQc1GOQ/exec');
            const users = await response.json();

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Save user data in session storage
              localStorage.setItem('user', JSON.stringify(user));

                // Redirect to the welcome page
                window.location.href = 'dashboard.html';
            } else {
               errorMsg.classList.remove("hidden");
              //  alert('Invalid email or password');
            }
}
