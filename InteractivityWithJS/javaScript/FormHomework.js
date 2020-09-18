function billingFunction(){
	//Valida estado del Checkbox
	if(document.getElementById('same').checked){
		//Obtiene contenido de elements con ID
		name = document.getElementById('shippingName').value;
		zip = document.getElementById('shippingZip').value;
		//Actualiza contenido de elementos con valores leidos
		document.getElementById('billingName').value = name;
		document.getElementById('billingZip').value = zip;
	}
	else{
		//Limpia contenido del elemento
		document.getElementById('billingName').value = "";
		document.getElementById('billingZip').value = "";
	}
}