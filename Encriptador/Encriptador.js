/*    CREADOR: URIEL CRUZ VALDES

        ****REDES SOCIALES***
        HitGub: Urielczv
        twitter: @Uriel_cruzv
        Discord: Uriel交 #6555
        Correo: urieazul907@gmail.com*/



/*VARIABLES QUE DETECTAN LOS TEX-TAREA DEL HTML */
const textMensaje = document.querySelector(".text-mensaje");
const resultado = document.querySelector(".resultado");


/*AQUI TENEMOS LAS FUNCIONES QUE SE OPCUAN PARA LAS FUNCIONES QUE SE UTILIZAN PARA LOS BOTONES DE LA PAGINA */
function botonEncriptar(){
    const encriptar = Encriptar(textMensaje.value);
    resultado.value = encriptar;
    textMensaje.value = "";
    resultado.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const desencriptar = desencriptarTexto(textMensaje.value);
    resultado.value = desencriptar;
    textMensaje.value = "";
    resultado.style.backgroundImage = "none";
}


/*ESTAS SON LAS FUNCIONES LOGICAS EN LAS QUE SE TRABAJAN LA ENCRIPTACION Y DESENCRIPTACION */
function Encriptar(Texto){
    let resultado = "";
    for(let i = 0; i < Texto.length; i++ ){
        let letra = Texto[i].toLowerCase();
        switch (letra){
                case "e":
                resultado += "enter";
                break;
                case 'i':
                resultado += 'imes';
                break;
                case 'a':
                resultado += 'ai';
                break;
                case 'o':
                resultado += 'ober';
                break;
                case 'u':
                resultado += 'ufat';
                break;
                default:
                resultado += letra;
            }
        }
    return resultado;
}

function desencriptarTexto(textoEncriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(textoEncriptado.includes(codigo[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return textoEncriptado;
}
