<!-- //
function chkfrm(f){
	if (f.url.value == ""){
		alert ("Opss.. Sepertinya kamu melewatkan sesuatu!");
		f.url.focus();
		return false;
	}
	var found = false;
	for (var i=0;i<f.url.value.length;i++){
		var chr = f.url.value.charAt(i);
		if(chr=='.'){
			found = true;
			break;
		}
	}
	if (found == false){
		alert ("Aduh.. Sepertinya link nya salah, coba periksa kembali!");
                f.url.focus();
                return false;
	}
	return true;
}
function focusbox() {
	el = document.getElementById('url');
	el.focus();
}

window.onload = focusbox;
// -->