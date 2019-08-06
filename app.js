const Vuelos = []; //cree un arreglo de ObjetoSSSS : contendrá un conjunto de objetos

var btnReservar= document.getElementById('reservar')//traigo el boton de reservar

btnReservar.addEventListener ('click',function(){ //en el boton reservar agregas el evento click 
    // y ejecuta la funcion de la derecha

    var radios=document.getElementsByName("tipoViaje");//trae todos los elemntos con ese nombre 
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    for(var i=0;i<radios.length;i++)
    {
        if(radios[i].checked)
            valorRadio=radios[i].value;
    }
    let ciudadOrigen= document.getElementById('ciudadOrigen').value//traemos los valores del formulario
    let ciudadDestino= document.getElementById('ciudadDestino').value
    let checkIn= document.getElementById('chechIn').value
    let checkOut= document.getElementById('checkOut').value
    let tipoServicio= document.getElementById('tipoServicio').value
    let adultos= document.getElementById('adultos').value
    let ninos= document.getElementById('ninos').value
    

    


    
    
    

    let tipoViaje= valorRadio;

    


console.log(tipoViaje)

})


