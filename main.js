const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Validation function to ensure input contains only lowercase letters and spaces
function validateInput(input) {
    const regex = /^[a-z\s]+$/;
    return regex.test(input);
}

// Encryption function
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

// Decryption function
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}

// Encrypt button function
function btnEncriptar() {
    const inputText = textArea.value.trim();

    if (!validateInput(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    if (inputText === "") {
        alert("El campo no puede estar vacío.");
        return;
    }

    const textEncriptado = encriptar(inputText);
    mensaje.value = textEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

// Decrypt button function
function btnDesencriptar() {
    const inputText = textArea.value.trim();

    if (!validateInput(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    if (inputText === "") {
        alert("El campo no puede estar vacío.");
        return;
    }

    const textDesencriptado = desencriptar(inputText);
    mensaje.value = textDesencriptado;
    textArea.value = "";
}

// Copy to clipboard function using Clipboard API
async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(mensaje.value);
        alert("¡Texto copiado al portapapeles!");
    } catch (err) {
        console.error("No se pudo copiar el texto: ", err);
    }
}
