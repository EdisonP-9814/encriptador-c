const d = document;

const textaera = d.querySelector(".form_input");
const imagenMuneco = d.querySelector(".result_img");
const loaderReloj = d.querySelector(".loader");
const result_title = d.querySelector(".result_tittle");
const resut_text = d.querySelector(".resut_text");
const form_btn_encriptar = d.querySelector(".form_btn");
const form_btn_desencriptar = d.querySelectorAll(".form_btn");
const botoncopiar = d.querySelector(".result_btn");


const llaves = [["e","enter"],["i","imes"],["o","ai"],["a","ober"],["u","ufat"]];


// Funcion de encriptacion
function ecriptarmensaje(mensaje){
    let mensajencriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;

        for(let j = 0; j < llaves.length; j++ ){
            if(letra == llaves[j][0]){
                encriptada = llaves[j][1]; //remplaza la vocal por su llave encriptada
                break;
            }
        }
        mensajencriptado += encriptada;
    }
    return mensajencriptado;
}

//funcion de desencriptacion
function desencriptarmensaje(mensaje){
    let mensajedesencriptado = mensaje;
    for(let i =0; i < llaves.length; i++){
        
        let regex = new RegExp(llaves[i][1], 'g');
        mensajedesencriptado = mensajedesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajedesencriptado;
}

//ocultar elementos
textaera.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderReloj.classList.remove("hidden");
    result_title.textContent = "Procesando Texto";
    resut_text.textContent = "";

})

//funcion del boton encriptar
form_btn_encriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje  = textaera.value.toLowerCase();
    let mensajencriptado = ecriptarmensaje(mensaje);
    resut_text.textContent = mensajencriptado;
    botoncopiar.classList.remove("hidden");
    result_title.textContent = "el resultado es Texto: ";
})

form_btn_desencriptar[1].addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje  = textaera.value.toLowerCase();
    let mensajedesencriptado = desencriptarmensaje(mensaje);
    resut_text.textContent = mensajedesencriptado;
    botoncopiar.classList.remove("hidden");
    result_title.textContent = "el resultado es Texto: ";
})

botoncopiar.addEventListener("click", ()=>{
    let textoCopiado = resut_text.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        loaderReloj.classList.add("hidden");
        result_title.textContent = "El texto se copio";
        botoncopiar.classList.add("hidden");
        resut_text.textContent = "";
    })
})
