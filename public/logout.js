// LOGOUT DO USUARIO

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "/auth/login/";
    }).catch(() => {
        alert("Error")
    })
}
