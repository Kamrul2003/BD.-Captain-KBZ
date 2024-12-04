// Predefined users data
const users = [
  { username: "Kbz", password: "k", name: " BD. CAPTAIN KBZ. dhdgsdge", email: "5291", approve: " Verified.", blnc: "2500 TK.", well: "Wellcome", addmin: "Dear, Addministor."},
  { username: "Siam", password: "kk", name: "MR. KBZ SIAM.", email: "8888", approve: " Verified.", blnc: "2000 TK." , well: "Wellcome", addmin: "Dear, Addministor."},
  { username: "Sajib", password: "kkk", name: "SAJIB FFL", email: "7555", approve: " Blocked.", blnc: "1500 TK."},
];

// DOM elements
const loginContainer = document.getElementById("login-container");
const userDataContainer = document.getElementById("user-data-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userAge = document.getElementById("user-age");
const logoutBtn = document.getElementById("logout-btn");
const userverified = document.getElementById("verify");
const userwel = document.getElementById("wlcm");
const userad_min = document.getElementById("admn");

// Login functionality
loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Display user data
    userName.textContent = user.name;
    userEmail.textContent = user.email;
    userverified.textContent = user.approve;
    userAge.textContent = user.blnc;
    userwel.textContent = user.well;
    userad_min.textContent = user.addmin;

    // Switch views
    loginContainer.classList.add("hidden");
    userDataContainer.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  } else {
    errorMsg.classList.remove("hidden");
  }
});

// Logout functionality
logoutBtn.addEventListener("click", () => {
  // Clear input fields
  usernameInput.value = "";
  passwordInput.value = "";

  // Switch views
  loginContainer.classList.remove("hidden");
  userDataContainer.classList.add("hidden");
});