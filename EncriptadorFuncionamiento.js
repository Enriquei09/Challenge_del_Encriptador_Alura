//Funcion para obtener el texto del Tex Area
function GetParrafo(){
    const textArea = document.getElementById('cajaDeTexto') ;
    const texto = textArea.value;
    console.log(texto);
    return texto;
 }

 //funcion para Encriptar el texto
function encriptarTexto(texto){
    return texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    
}

//funcion para desencriptar el texto
function DesencriptarTexto(texto){
    return texto
    .replace(/ufat/g, 'u')
    .replace(/ober/g, 'o')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e')
    .replace(/ai/g, 'a');

}


// Funcion que procesa tanto el texto encriptado como el desencriptado

function procesarTexto(encriptar){
    const texto = GetParrafo();
    const textoprocesado = encriptar ? encriptarTexto(texto): DesencriptarTexto(texto);
    console.log(textoprocesado);

    // mostrar el texto encriptado
    const mensajeEncriptado = document.getElementById('CajaTxtDos');
    mensajeEncriptado.value = textoprocesado;

    
    //oculto la imagen del niño y el mensaje
    const segundoContenido = document.querySelector('.segundo_contenido_nino');
    segundoContenido.style.display = 'none';
    // Muestro la segunda caja de texto y su boton
    const contenidoOculto = document.querySelector('.contenido_oculto');
    contenidoOculto.style.display = 'inline';

    

}

//Funcion para copiar el texto
function copiarTexto(){
    const copiarMensajeTextArea = document.getElementById('CajaTxtDos');
    copiarMensajeTextArea.select();
    copiarMensajeTextArea.setSelectionRange(0, 99999);

    document.execCommand('copy');
    alert("Texto Copiado "+copiarMensajeTextArea.value);

    //limpiar caja de texto2
    document.getElementById('CajaTxtDos').value =' ';
    // limpiar caja de texto 1
    document.getElementById('cajaDeTexto').value =' ';

    

}