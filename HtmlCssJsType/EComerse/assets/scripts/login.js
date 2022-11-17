const userNames = document.getElementById('userName');
const pass = document.getElementById('password');
const frmLogin = document.getElementById('frm-register');

frmLogin.addEventListener('submit', LoginUser);


function LoginUser (event) {

    event.preventDefault();
    const getLocal = localStorage.getItem("user");
    const validateUser = JSON.parse(getLocal);

    if (userName.value === "" || password.value === ""){
        alert("Please fill in the blanks");
    }

    else if (!validateUser.find(user => user.user === userName.value)){
        alert("The user does not exist");
    }

    else if (validateUser.find(user => user.user === userName.value).pass !== pass.value){
        alert("Wrong password");
    }

    else {
        alert("User logged in");

        window.location.href ="../pages/index.html";
    }
}