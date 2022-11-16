const frmLogin = document..getElementById("frm-register");
const userName = document.getElementById("loginName");
const password = document.getElementById("loginPassword");

frmLogin.addEventListener("submit", LoginUser);


function LoginUser (event) {
    event.preventDefault();
    const getLocal = localStorage.getItem("user");
    const validateUser = JSON.parse(getLocal);

    if (userName.value === "" || password.value === "") {
        alert("Please enter a username and password");
    }

    else if (!validateUser.find(user => user.user === userName.value)) {
        alert("The user does not exist");
    })

};


// Admin Login

const AdminLogin = {
    username: 'admin',
    password: 'admin'
}