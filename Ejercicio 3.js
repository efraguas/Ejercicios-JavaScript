//Factorial con bucle for


let total = 1; 

	for (i=1; i<=10; i++) {
		total = total * i; 
	}
	console.log(total);


//Utilizando un bucle While

function factorial(numero){
    let resultado = 1;
    let i = 1;
    while(i <= numero){
    resultado *= i;
    i++
    
    }
    return resultado
}

// Utilizando un bucle while, sentencia If y un break

function factorial(numero){
    let resultado = 1;
    let i = 1;
    while(i >= 1){
        resultado *= i;
        i++;
        if(i >= numero){
            break;
        }
    }
    return resultado
  
}

