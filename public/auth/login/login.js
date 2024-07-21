// MANTENDO A SESSÃO

firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        window.location.href = "/home.html"
    }
})

// VALIDAÇÃO DE FORMULARIO

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}
function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

// LOGIN OCORRE AQUI

function login() {
    // showLoading();

    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response =>{
        // hideLoading();
        window.location.href = "/home.html";
    }).catch(error => {
        // hideLoading();
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Oops! Wrong email or password, try something different."
    }
}

function register() {
    window.location.href = "    /auth/register/"
}

function toggleEmailErrors() {

    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block"
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    return form.password().value ? true : false;
}


function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
        return validateEmail(email);
}


const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recovery-password-button"),
}
