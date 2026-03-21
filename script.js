if(localStorage.getItem("longgedIn") !=="true"){
    alert("please sign in first");
}
function signin (){
    let status=
    localStorage.getItem("loggedIn");
}// if user is not logged in - sign in
if (statusbar !=="true"){
    let username =prompt("enter username:");
    let password = prompt("enter password:");
    if (username=="isaacusman"&&password==="shagi@A3"){
        localStorage.setItem("loggedIn","true");
        alert("login successful");
    }else{
        alert("wrong details");
    }
}
//IF user is already logged in - sign out
else {
    localStorage.removeItem("loggedIn");
    alert("you have logged out");
}
if (localStorage.getItem("loggedIn")!=="true") {
    document.getElementById("service").style.display ="none";
    document.getElementById("help").style.display ="none";
}else{
    document.getElementById("service").style.display ="block";
    document.getElementById("help").style.display ="block";
}
const btn = document.getElementById("signin-btn");

// Function to update button text
function updateButton() {
  if (localStorage.getItem("loggedIn") === "true") {
    btn.textContent = "Sign Out";
    showSections();
  } else {
    btn.textContent = "Sign In";
    hideSections();
  }
}

// Function to hide protected sections
function hideSections() {
  if (document.getElementById("service")) document.getElementById("service").style.display = "none";
  if (document.getElementById("help")) document.getElementById("help").style.display = "none";
}

// Function to show protected sections
function showSections() {
  if (document.getElementById("service")) document.getElementById("service").style.display = "block";
  if (document.getElementById("help")) document.getElementById("help").style.display = "block";
}

// Click event for button
btn.addEventListener("click", () => {
  if (localStorage.getItem("loggedIn") !== "true") {
    // Sign In
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    if (username === "admin" && password === "1234") {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful");
    } else {
      alert("Wrong username or password");
    }
  } else {
    // Sign Out
    localStorage.removeItem("loggedIn");
    alert("You have logged out");
  }
  updateButton(); // update text and sections
});

// Initialize button and sections on page load
updateButton();