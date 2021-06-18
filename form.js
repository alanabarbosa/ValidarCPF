function validar() {

	var valor = document.getElementById("numero").value;

	if(valor.length > 11) {
		alert("Insira um CPF válido.");
		return false;
	} else if(valor.length < 11){
		alert("Insira um CPF válido.");
		return false;
	}else {
		alert("CPF validado  com sucesso.");
		return true;
	}

}