var toEncript = '';
var result = '';
var letters = ['a', 'e', 'i', 'o', 'u'];
var replaceLetters = ['ai', 'enter', 'imes', 'ober', 'ufat']
///ENCRIPTAR + FUNCION
var encriptBtn = document.getElementById('encriptBtn');
encriptBtn.addEventListener('click', getValueToEncript);
encriptBtn.addEventListener('click', encriptation);



function getValueToEncript() {
    encoderValue = document.getElementById('encoder').value
    toEncript = encoderValue;
}


function encriptation() {   

for(let i = 0; i < letters.length; i++){
    toEncript = toEncript.replaceAll(letters[i], replaceLetters[i])
}
removechild();
domCreate();
}

/// DESENCRIPTAR + FUNCION
var unencriptBtn = document.getElementById('unencriptBtn')
unencriptBtn.addEventListener('click', getValueToEncript)
unencriptBtn.addEventListener('click', unencript)

function unencript() {
    letters = letters.reverse();
    replaceLetters = replaceLetters.reverse()
    for(let i = 0; i < letters.length; i++){
        toEncript = toEncript.replaceAll(replaceLetters[i], letters[i])
    }
    removechild();
    domCreate();
    
}

/// DOM LOGIC  

/// NOT USING

var textConteiner = document.getElementById('textconteiner');
let figure = document.createElement('figure');
let img = document.createElement('img')
img.setAttribute('src', './img/Muñeco.svg')
img.setAttribute('alt', 'not found image')
img.classList.add('not-found')
figure.appendChild(img);
textConteiner.appendChild(figure);
let h3 = document.createElement('h3');
let h3Text = document.createTextNode('Ningún mensaje fue encontrado');
h3.appendChild(h3Text);
textConteiner.appendChild(h3);
let parr = document.createElement('p');
let parrText = document.createTextNode('Ingrese el texto que desea encriptar o desencriptar.');
parr.classList.add('parr');
parr.appendChild(parrText);
textConteiner.appendChild(parr);



function domCreate() { 
    let responseParr = document.createElement('p')
    let parrText = document.createTextNode(toEncript);
    responseParr.classList.add('response-parr');
    responseParr.appendChild(parrText);
    textConteiner.appendChild(responseParr);

    let copybutton = document.createElement('button');
    copybutton.setAttribute('id', 'copybutton');
    copybutton.innerText = 'Copiar';
    copybutton.addEventListener('click', copy)
    textConteiner.appendChild(copybutton)


}

function copy(){
    let copyText = document.querySelector('.response-parr');
    navigator.clipboard.writeText(copyText.innerHTML);
    alert('Texto copiado.')
}

function removechild(){
    while (textConteiner.firstChild) {
        textConteiner.removeChild(textConteiner.firstChild);
    }
}