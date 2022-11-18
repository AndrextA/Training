const frmLogin = document.getElementById("frm-register");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const userRegistered = [];
let id = 0;

frmLogin.addEventListener("submit", RegisterUser);

function RegisterUser(event) {
  event.preventDefault();

  id++;

  const user = {
    id: id,
    nameFull: fullName.value,
    user: userName.value,
    pass: password.value,
    confPassword: confirmPassword.value,
  };

  if (
    fullName.value === "" ||
    userName.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    alert("Please fill in the fields");
  }

  else if (password.value !== confirmPassword.value){

  }

  else if (userRegistered.find(user => user.user === userName.value)){

  }

  else {

    userRegistered.push(user);

    localStorage.setItem("user", JSON.stringify(userRegistered));
    alert("User has been successfully registered");

    fullName.value = "";
    userName.value = "";
    password.value = "";
    confirmPassword.value = "";

  }
}

const Admin = {
    id: 1,
    nameFull: "Administrator",
    user: 'admin@test.com',
    pass: 'AdminTest1*',
    confPassword: 'AdminTest1*'
}
