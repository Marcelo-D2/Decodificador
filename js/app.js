let textoEntrada = "";
let textoSaida = "";
let textoBotaoCopiar = "";
const regex = "[^a-z ]";

document.getElementById('resultado_descripto').style.display = 'none';

function criptografar() {
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

    textoSaida = textoEntrada.replace(/e/g, "zen")
                                .replace(/i/g, "ni")
                                .replace(/a/g, "san")
                                .replace(/o/g, "yon")
                                .replace(/u/g, "kyu");

    textoBotaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('resultado_cripto').style.display = 'none';
    document.getElementById('resultado_descripto').style.display = 'block';
}

function descriptografar() {
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

    textoSaida = textoEntrada.replace(/zen/g, "e")
                                .replace(/ni/g, "i")
                                .replace(/san/g, "a")
                                .replace(/yon/g, "o")
                                .replace(/kyu/g, "u");

    textoBotaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('resultado_cripto').style.display = 'none';
    document.getElementById('resultado_descripto').style.display = 'block';
}

function copiar() {
    navigator.clipboard.writeText(textoBotaoCopiar);
}

function validarEntradaCrip(){
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('textoAviso').style.color = '#00d4ff'; 
        document.getElementById('textoAviso').style.fontSize= '15px';            
        criptografar();   
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('resultado_cripto').style.display = 'block';
        document.getElementById('resultado_descripto').style.display = 'none';
        document.getElementById('textoAviso').style.color = '#00d4ff';
        document.getElementById('textoAviso').style.fontSize= '25px';    
    }
}

function validarEntradaDescrip() {
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('textoAviso').style.color = '#00d4ff'; 
        document.getElementById('textoAviso').style.fontSize= '15px';    
       descriptografar();
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('resultado_cripto').style.display = 'block';
        document.getElementById('resultado_descripto').style.display = 'none';
        document.getElementById('textoAviso').style.color = '#00d4ff'; 
        document.getElementById('textoAviso').style.fontSize= '25px';            
    }
}