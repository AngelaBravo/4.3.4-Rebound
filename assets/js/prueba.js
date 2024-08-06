let frases = "";
for (let index = 0; index < 5; index++) {
    frases += `<p>Numero ${index}</p>`; // las dos son iguales
    frases = frases+ `<p>Numero ${index}</p>`;
}

// document.write(frases);  funciona bien, pero al final de la pagina

document.getElementById("aqui").innerHTML=frases; 