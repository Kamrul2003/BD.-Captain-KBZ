   
  const user = JSON.parse(localStorage.getItem('user'));
        //  name: row[0], number: row[1], email: row[2], password: row[3], referaln: row[5], referalid: row[6], id: row[7], verify: row[8], blnc: row[9], profile: row[10],
        if (user) {
         document.getElementById("userName").textContent = user.name; //name: row[0],1
        document.getElementById("userId").textContent = user.id; //id: row[7],7
        document.getElementById("verify").textContent = user.verify; //verify: row[8],8
        document.getElementById("user-balance").textContent = user.blnc; //blnc: row[9],
        document.getElementById("User-DP").src = user.profile; //profile: row[10],
        document.getElementById("wlcm").textContent = user.well; //
        document.getElementById("UserAgency").textContent = user.AppUser; //
        document.getElementById("App_SubAdmin").textContent = user.AppSubAdmin; //
        document.getElementById("App_Admin").textContent = user.AppAdmin; //
        } else {
            // Redirect back to login if session data is missing
            window.location.href = 'Login.html';
        }
        // Logout function
function logout() {
    localStorage.removeItem("user");
    window.location.href = "Login.html";
}
 // JavaScript to handle the navigation
function openAgency() {
    window.location.href = "Shopping.html";
}
   function openMenu() {
    window.location.href = "Index.html";
} 
    function openMe() {
      window.location.href = 'dashboard.html';
    }
