let mainForm=document.getElementById("mainForm");
let input_num=document.getElementById("nombre");
let input_codigo_postal= document.getElementById("codigoPostal");
let input_edad= document.getElementById("edad");
mainForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("asegurese de que los datos son correctos");
    console.log("El nombre es: " + input_num.value);
    if (input_codigo_postal.value.length == 5){
        console.log("El codigo postal es correcto: " + input_codigo_postal.value);
    } else {
        console.log("El codigo postal es incorrecto");
    }
    if(isNaN(input_edad.value) == true){
        //entonces no recibimos algo numerico
        console.log("La edad no es numérica");
    } else{
        console.log("La edad es numérica");
    }
    let genero = ["Femenino", "Masculino", "Otro"];
    let input_genero =document.querySelector("input[name='genero']:checked");
    console.log("La carrera seleccionada es: " + input_genero.value);
    if (genero.indexOf(input_genero.value) != -1){
        console.log("Tu género es válido")
    } else{
        console.log("El género " + input_genero.value + " no es una opción válida");
    }
});
