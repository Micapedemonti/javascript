// // // // BUCLES FOR
// // // for (let i=0; i < 100;  i++){
// // //     console.log("estoy vendiento entradas para la peli: - " + [i]);

// // // }

// // for (let index=0;  index < 5;  index++){
// //     alert("soy una ventana y te muestro el bucle for: " + [index]);

// // }


// // let edad = prompt('')

// // WHILE


let nombre = prompt(`ingrese su Nombre?`);
alert (`Bienvenido/a nuestra cerveceria online ${nombre}`);
let edad= prompt (`ingrese su edad`); 
if (edad <=18){
    alert ("Lo siento, esta prohibida la venta de alcohol a menores de 18 años");
}else if (edad >19 && edad<=65){
    alert(`Gracias por elegirnos`);
}

let cervezas= parseInt(prompt(`Que tipo de cerveza quieres llevar hoy? ,ingrese el numero segun sea tu opcion ?
-1 ipa
-2 red ipa.
-3 negra.
-4 otra`));
while (cervezas ==1){
prompt ("No tenemos disponible esa opcion, ingrese otra");
}

let numeroCervezas = parseInt(prompt("Cuantas cervezas te gustaria comprar?"));

        for(let i= 300; i>= numeroCervezas ; i++){
            let resultado =numeroCervezas * i;
        if (numeroCervezas <=2){
        alert ("Lo siento, solo compras mayores a 3 unidades");
        }else if (numeroCervezas >3 && numeroCervezas <=30){
        } alert('El precio por una unidad es de '+ i + ' pesos  y por '+ numeroCervezas + ' unidades'+ ' es de ' + resultado + ' pesos .' );
        break;
    
} 
let pago = prompt("Como vas a pagar? debito, transferencia o Efectivo")
if(pago == "debito"){
    alert("Tenes 10% de descuento con debito");
} else if(tarjeta == "transferencia"){
    alert("Tenes 5% de descuento con transferencia");
} else {
    alert("En efectivo tenes 20% de decuento");
}
