function signIn() {
    const user = document.getElementById('loginName').value;
    const pass = document.getElementById('loginPassword').value;
    console.log(user, pass);

    if (user == 'admin@test.com' && pass == 'AdminTest1*') {
        window.location.href = '/assets/pages/adminDashboard.html';
        localStorage.user = 'admin';
    } else {
        alert('Please enter a valid login')
    }

}