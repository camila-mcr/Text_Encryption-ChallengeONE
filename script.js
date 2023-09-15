//VARIABLES
const textArea = document.getElementsByClassName("input__textArea")[0];
const message = document.getElementsByClassName("result__message__textArea")[0];
const noMessage = document.getElementsByClassName("result__noMessage")[0];
const resultMessage = document.getElementsByClassName("result__message")[0];
const buttonEncrypt = document.getElementsByClassName("input__buttons__encrypt")[0];
const buttonDecrypt = document.getElementsByClassName("input__buttons__decrypt")[0];
const buttonCopy = document.getElementsByClassName("result__message__copyButton")[0];


resultMessage.style.display = "none";


//ENCRIPTAR
buttonEncrypt.addEventListener("click", function encrypt(encryptedText){
    encryptedText = textArea.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes") 
        .replace(/a/gi, "ai") 
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    let validMessage = validate();

    if(encryptedText && validMessage == true){
        resultMessage.style.display = 'visible';
        resultMessage.style.display = "initial";
        message.innerText= encryptedText;
        textArea.value =  "";
    };
    
    return encryptedText;
});


//DESENCRIPTAR
buttonDecrypt.addEventListener("click", function decrypt(decryptedText){
    decryptedText = textArea.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
        let validMessage = validate();
    
    if(decryptedText){
        resultMessage.style.display = "initial";
        message.innerText= decryptedText;
        textArea.value =  "";
    };

    return decryptedText;   
});


function validate(text){
    text = textArea.value;
    let valid = false;
    const pattern = new RegExp('^[a-z\u00f1\s ]*$','g');
    
    if (!text){
        valid = false;
        alert("Debes ingresar un mensaje.");
    } else if (!pattern.test(text)){
        valid = false;
        alert("Solo letras minúsculas y sin acentos.");
    } else {
        valid = true;
        alert("Mensaje válido.");
    };
    
    return valid;
};

//COPIAR
buttonCopy.addEventListener("click", function copy(){
    message.select();
    navigator.clipboard.writeText(message.value);
    textArea.value = message.value;
});





