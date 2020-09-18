var grades= [2, 5, , , 9, 8, , 8];

var sum = 0;
var cont = 0;

//Valida que no sea un arreglo vacio
if(grades.length > 0){
	for(index = 0; index < grades.length; index++){
		//Validamos que no sea un elemento indefinido
		if(grades[index] != undefined){
			sum += grades[index];
			cont++;
		}
	}
	//Escribimos el resultado
	document.write(sum / cont);
}
else{
	document.write("Arreglo Vacío");
}