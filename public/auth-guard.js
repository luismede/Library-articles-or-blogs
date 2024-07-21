// VALIDANDO SE O USUARIO ESTÁ LOGADO

firebase.auth().onAuthStateChanged(user => {
    if(!user) {
        window.location.href = "/auth/login/";
    }
})
