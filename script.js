const inputText = document.querySelector("#textInput");
const outputText = document.querySelector("#textboxOutput");


const codeMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

function btnEcrypt() {
    const text = encrypter(inputText.value);
    outputText.value = text
}

function btnDecrypt() {
    const text = decrypter(inputText.value);
    outputText.value = text
}

function encrypter(phrasetoEncrypt) {
    for (let i = 0; i < codeMatrix.length; i++) {
        if (phrasetoEncrypt.includes(codeMatrix[i][0])) {
            phrasetoEncrypt = phrasetoEncrypt.replaceAll(
                codeMatrix[i][0],
                codeMatrix[i][1]
            )
        }
    }
    return phrasetoEncrypt
}

function decrypter(phrasetoEncrypt) {
    for (let i = 0; i < codeMatrix.length; i++) {
        if (phrasetoEncrypt.includes(codeMatrix[i][1])) {
            phrasetoEncrypt = phrasetoEncrypt.replaceAll(
                codeMatrix[i][1],
                codeMatrix[i][0]
            )
        }
    }
    return phrasetoEncrypt
}