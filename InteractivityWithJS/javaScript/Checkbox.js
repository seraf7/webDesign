function nicknameFunction(){
	//Valida estado del checkbox
	if(document.getElementById('yesNick').checked){
		//Despliegue de elemento
		document.getElementById('nick').style.display = "inline";
		//Activa el requisito de ser llenado
		document.getElementById('nickname').setAttribute('required', true);
	}
	else{
		//Permite dejar elemento vacio
		document.getElementById('nickname').removeAttribute('required');
		//Oculta elemento
		document.getElementById('nick').style.display = "none";
	}
}