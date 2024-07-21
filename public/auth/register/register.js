// MANTENDO A SESSÃO
firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        window.location.href = "/home.html"
    }
})


// VALIDAÇÃO DE FORMULARIO

function onChangeEmail() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    toggleRegisterButtonDisable();
}

function onChangePassword() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

    validatePasswordMatch();
    toggleRegisterButtonDisable();
}

function onChangeConfirmPassword() {
    validatePasswordMatch();
    toggleRegisterButtonDisable();
}

function validatePasswordMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display =
    password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();

}

function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }
    const password = form.confirmPassword().value;
    if (!password || password.length < 6) {
        return false;
    }
    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
        return false;
    }
    return true;
}

// REGISTRO DE USUARIOS

function register() {
    // showLoading();

    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        // Redirect for login page after register user
        // hideLoading();
        window.location.href = "/auth/login/";
    }).catch(error => {
        // hideLoading();
        alert(getErrorMessage(error));
    })
}


function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "This email is already in use. Try another! 🖖"
    }
    return error.message;
}

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirmPassword'),
    registerButton: () => document.getElementById('register-button')
}
