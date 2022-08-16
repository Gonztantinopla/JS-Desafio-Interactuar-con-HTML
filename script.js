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

// function calcular(){
//     let confirmar
//     do{
//         let item = prompt("Ingrese que es lo que desea comprar\n por ejemplo, un iPad")

//         let valorContado = parseFloat(prompt("ingresa el valor en 1 pago de su producto."))
//         if (isNaN(valorContado)){
//             alert("Debe elegir un valor numerico")
//         }
//         else{
//         let cuotas = parseFloat(prompt("Ingresa la cantidad de cuotas entre uno y seis pagos."))
//         if ((cuotas > 6)||(isNaN(cuotas))){
//             alert("Debe elegir una cantidad de cuotas entre 1 y 6")
//         }
//         else{
//         precioFinal = parseInt(calculoFinal(valorContado, cuotas))
//         valorCuota = parseInt(calculoCuotas(valorContado,cuotas))
//         console.log("Debera abonar", cuotas,"cuotas de", "$", Math.trunc(parseFloat(calculoCuotas(valorContado, cuotas))))
//         alert("Debera abonar\n" + cuotas +" cuotas de" + " $" + Math.trunc(parseFloat(calculoCuotas(valorContado, cuotas))))
//         }
//         cotizaciones.push(new Cotizacion(item, valorContado, cuotas, valorCuota, Math.trunc(precioFinal)))
//         }
//         confirmar = confirm("realizar otra operacion?")
//         }  

//         while (confirmar);

// }

var botonCalcular = document.getElementById("botonCalcular")
botonCalcular.addEventListener("click", calcular)

function calcular() {
    let item = document.getElementById("item").value
    let valorContado = document.getElementById("valorContado").value
    let cuotas = document.getElementById("cuotas").value
    precioFinal = parseInt(calculoFinal(valorContado, cuotas))
    valorCuota = parseInt(calculoCuotas(valorContado, cuotas))
    console.log("Debera abonar", cuotas, "cuotas de", "$", Math.trunc(parseFloat(calculoCuotas(valorContado, cuotas))))
    alert("Debera abonar\n" + cuotas + " cuotas de" + " $" + Math.trunc(parseFloat(calculoCuotas(valorContado, cuotas))))
    cotizaciones.push(new Cotizacion(item, valorContado, cuotas, valorCuota, Math.trunc(precioFinal)))
}


function calculoFinal(num1, cuotas) {
    switch (cuotas) {
        case "1 pago":
            return num1
        case "2 pagos":
            return (num1 * 1.12)
        case "3 pagos":
            return (num1 * 1.18)
        case "4 pagos":
            return (num1 * 1.24)
        case "5 pagos":
            return (num1 * 1.31)
        case "6 pagos":
            return (num1 * 1.39)
        default:
            return "elegir entre 1 y 6 pagos"
    }
}

function calculoCuotas(num1, cuotas) {
    switch (cuotas) {
        case "1 pago":
            return num1
        case "2 pagos":
            return (num1 * 1.12) / 2
        case "3 pagos":
            return (num1 * 1.18) / 3
        case "4 pagos":
            return (num1 * 1.24) / 4
        case "5 pagos":
            return (num1 * 1.31) / 5
        case "6 pagos":
            return (num1 * 1.39) / 6
        default:
            return "elegir entre 1 y 6 pagos"
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




function printCotizaciones() {
    const cuerpo = document.getElementById("cuerpo")
    debugger
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