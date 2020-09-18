function closeMe(){
	//Busqueda del elemento
	x = document.getElementById("demo");
	
	//Op 1 de cambio de estilo
	//x.style.display="none";

	//Op 2 de cambio de estilo
	x.className="closed";
}

function openMe(){
	//Busqueda del elemento
	x = document.getElementById("demo");
	
	//Op 1 de cambio de estilo
	//x.style.display="block";

	//Op 2 de cambio de estilo
	x.className="open"
}