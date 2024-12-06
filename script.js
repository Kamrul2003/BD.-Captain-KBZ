// Sample user database
const users = [
    { id: "5555", name: "BD. CAPTAIN KBZ.", password: "k", verify: "Verified", blnc:"50 TK", well: "Wellcome", AppAdmin: "Dear, Addministor.", Profile:"sm.png"},
    { id: "6666", name: "MILON BD. HATIYA", password: "m", verify: "Verified", blnc:"50 TK", well: "Wellcome", AppSubAdmin: "Dear, Sub-Addministor.", 
    Profile:"id3.png"},
    { id: "2222", name: "CAPTAIN KBZ BD.", password: "c", verify: "Blocked", blnc:"0.00 TK", well: "Wellcome", AppUser: "Dear, User.", Profile:"setting.png"},
    { id: "Kbz", name: "KBZ AGENCY BD.", password: "k", verify: "Blocked", blnc:"0.00 TK", well: "Wellcome", AppUser: "Dear, User."},
];


// Display user information on dashboard
if (window.location.pathname.includes("dashboard.html")) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("userName").textContent = user.name;
        document.getElementById("userId").textContent = user.id;
        document.getElementById("verify").textContent = user.verify;
        document.getElementById("user-balance").textContent = user.blnc;
        document.getElementById("wlcm").textContent = user.well;
        document.getElementById("UserAgency").textContent = user.AppUser;
        document.getElementById("App_SubAdmin").textContent = user.AppSubAdmin;
        document.getElementById("App_Admin").textContent = user.AppAdmin;
        document.getElementById("User-DP").src = user.Profile;
        
        
    } else {
        // Redirect back to login if no user sessiontc
        window.location.href = "Login.html";
    }
}



// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
    
    const user = users.find(
        (u) => u.id === username && u.password === password
    );

    if (user) {
        // Save user session to local storage
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
      
        errorMsg.classList.remove("hidden");
    }   
}

// Logout function
function logout() {
    localStorage.removeItem("user");
    window.location.href = "Login.html";
}

const userApp_Admin= document.getElementById("App_Admin")




userApp_Admin.addEventListener("click", () =>{
  window.location.href = 'ahp.html';
});

