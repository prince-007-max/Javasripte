function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const UpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const LowerCase = "qwertyuiopasdfghjklzxcvbnm";
    const num = "1234567890";
    const sym = "~!@#$%^&*()_+{}:><?,./;'`][-=";

    let allowword = "";
    let password = "";

    if (uppercase) allowword += UpperCase;
    if (lowercase) allowword += LowerCase;
    if (numbers) allowword += num;
    if (symbols) allowword += sym;

    if (allowword.length === 0) {
        document.getElementById("password").textContent = "Select at least one option!";
        return;
    }

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allowword.length);
        password += allowword[index];
    }

    document.getElementById("password").textContent = password;
}