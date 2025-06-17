let mainForm=document.getElementById("mainForm");
let input_num=document.getElementById("nombre");
let input_codigo_postal= document.getElementById("codigoPostal");
let input_edad= document.getElementById("edad");
mainForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("uy kietos");
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
    let carreras_de_interes = ["ciencias_computacion", "ingenieria"];
    let input_carrera =document.querySelector("input[name='carrera']:checked");
    console.log("La carrera seleccionada es: " + input_carrera.value);
    if (carreras_de_interes.indexOf(input_carrera.value) != -1){
        console.log("Tu carrera es válida")
    } else{
        console.log("La carrera" + input_carrera.value + "no es una opción válida");
    }
});
