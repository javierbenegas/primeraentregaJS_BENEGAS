function saludo(cliente){
    alert('Hola ' + cliente + ', a continuación realizaremos juntos la cotización de tu vehículo.')
}
let nombre = prompt('Bienvenido, ingresa por favor tu nombre:')
saludo(nombre)

let precioAuto = prompt('Ingresa el precio del auto que deseas comprar. \n\nColoca el monto sin puntos y sin comas, solo números.')
while (precioAuto < 0){
    alert('El valor ingresado debe ser mayor a 0')
    precioAuto = prompt('Ingresa el precio del auto que deseas comprar. \n\nColoca el monto sin puntos y sin comas, solo números.')
}

let entrega = prompt('Ahora ingresa el monto que queres entregar por el vehículo. \n\nRrecorda ingresar el monto sin puntos y sin comas, solo números.')
while (entrega < 0){
    alert('El valor ingresado debe ser mayor a 0')
    precioAuto = prompt('Ingresa el precio del auto que deseas comprar. \n\nRecorda ingresar el monto sin puntos y sin comas, solo números.')
}
let resta = precioAuto - entrega
alert('El monto que resta abonar es $' + resta)

let cuotas = prompt('¿En cuantas cuotas desea pagar la diferencia? \n\nCuotas disponibles de 1 a 72')
let cuotaTotal = resta / cuotas * 1.3
for(let i=1;i<=cuotas;i++){
    console.table(`Cuota numero `+ i + `: $${cuotaTotal}`)
}



