const cotizaciones = []


class Cotizacion {
    constructor(item, valorContado, cuotas, valorCuota, precioFinal) {
        this.item = document.getElementById("item").value
        this.valorContado = document.getElementById("valorContado").value
        this.cuotas = document.getElementById("cuotas").value
        this.valorCuota = valorCuota
        this.precioFinal = precioFinal
    }
}


function userNuevo(){
    let userName = 
    // prompt("ingrese su nombre")
    (Swal.fire
    ({
    title:'Bienvenido! porfavor ingresa tu nombre a continuación',
    input: 'text',
    inputAutoTriml: true
    }))
    localStorage.setItem ('usuario', userName)
}



const usuario = localStorage.getItem('usuario') || userNuevo()


// function cargarUsuario(
//     usuario || userNuevo()
// )


// cargarUsuario()


var botonCalcular = document.getElementById("botonCalcular")
botonCalcular.addEventListener("click", calcular)

function calcular() {
    let item = document.getElementById("item").value
    let valorContado = document.getElementById("valorContado").value
    if (valorContado == 0 ){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            text:"Debe ingresar un importe",
            })
    }
else{
    let cuotas = document.getElementById("cuotas").value
    precioFinal = parseInt(calculoFinal(valorContado, cuotas))
    valorCuota = parseInt(calculoCuotas(valorContado, cuotas))
    console.log("Debera abonar", cuotas, "cuotas de", "$", Math.trunc(parseFloat(calculoCuotas(valorContado, cuotas))))
    Swal.fire({
        position: 'center',
        icon: 'success',
        text: "Debera abonar\n" + cuotas + " de $" + Math.trunc(parseFloat(calculoCuotas(valorContado, cuotas))),
        showConfirmButton: true,
    })
    //   alert("Debera abonar\n" + cuotas + " cuotas de" + " $" + Math.trunc(parseFloat(calculoCuotas(valorContado, cuotas))))
    cotizaciones.push(new Cotizacion(item, valorContado, cuotas, valorCuota, Math.trunc(precioFinal)))
    limpiarlista()
    printCotizaciones()
    mostrarCotizaciones()
    localStorage.setItem("cotizaciones", JSON.stringify(cotizaciones))
}
}

function calculoFinal(num1, cuotas) {
    switch (cuotas) {
        case "1 cuota":
            return num1
        case "2 cuotas":
            return (num1 * 1.12)
        case "3 cuotas":
            return (num1 * 1.18)
        case "4 cuotas":
            return (num1 * 1.24)
        case "5 cuotas":
            return (num1 * 1.31)
        case "6 cuotas":
            return (num1 * 1.39)
        default:
            return "elegir entre 1 y 6 cuotas"
    }
}

function calculoCuotas(num1, cuotas) {
    switch (cuotas) {
        case "1 cuota":
            return num1
        case "2 cuotas":
            return (num1 * 1.12) / 2
        case "3 cuotas":
            return (num1 * 1.18) / 3
        case "4 cuotas":
            return (num1 * 1.24) / 4
        case "5 cuotas":
            return (num1 * 1.31) / 5
        case "6 cuotas":
            return (num1 * 1.39) / 6
        default:
            return "elegir entre 1 y 6 cuotas"
    }
}

function consultarCotizaciones() {
    console.table(cotizaciones)
}

function borrarUltimo() {
    alert("se eliminó: " + cotizaciones[cotizaciones.length - 1].item);
    console.log("se eliminó:", cotizaciones[cotizaciones.length - 1]);
    cotizaciones.pop()

}


function sumarPreciosFinales() {
    let total = cotizaciones.reduce((acumulador, cotizacion) => acumulador + cotizacion.precioFinal, 0)
    console.log("Total a pagar: $", total)
}

function sumarValoresCuotas() {
    let total = cotizaciones.reduce((acumulador, cotizacion) => acumulador + cotizacion.valorCuota, 0)
    console.log("Monto a pagar mensualmente: $", total)
}


function limpiarlista(){
    let listaLimpia = document.getElementById("cuerpo")
    listaLimpia.innerHTML = ""

}

function printCotizaciones() {
    const cuerpo = document.getElementById("cuerpo")
    // debugger
    cotizaciones.forEach(cotizacion => {
        cuerpo.innerHTML += `<tr>
        <td>${cotizacion.item}</td>
        <td>${cotizacion.valorContado}</td>
        <td>${cotizacion.cuotas}</td>
        <td>${cotizacion.valorCuota}</td>
        <td>${cotizacion.precioFinal}</td>
    </tr>`
    })
    
}

function mostrarCotizaciones(){
    let mostrar = document.getElementById("cotizacionesAnteriores")
        mostrar.className = "container calculador CotizacionesAnterioresShow animate__animated animate__fadeIn animete__delay-3s"
}



function almacenarCotizaciones (){

}