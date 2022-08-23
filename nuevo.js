for (let i = 1; i <= 10; i++) {

    
    let ingresarNombre = prompt("Ingresar nombre");

    alert(" Turno  N° " + i +" Nombre: " +ingresarNombre);
    console.log(" Turno  N° " + i +" Nombre: " +ingresarNombre);

    if (i=== 5){
        alert('esta persona esta demorada por llegar tarde')
        console.log ('esta persona esta demorada por llegar tarde');
        continue;
    }

    if (i === 10){
        alert ('llegue al N° maximo de turnos por dia');
        console.log ('llegue al N° maximo de turnos por dia');
        break;
    }
}



