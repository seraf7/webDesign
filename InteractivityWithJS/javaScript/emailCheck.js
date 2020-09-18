function check(){
	var email1 = document.getElementById('email_addr');
	var email2 = document.getElementById('email_repeat');

	//Valida que ambos valores sean iguales
	if(email1.value != email2.value){
		//Envia una alerta para valores distintos
		alert("Las direcciones deben ser iguales");
		return false;
	}
}