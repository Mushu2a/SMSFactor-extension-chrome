/*
* Configure le XML pour envoyé le SMS au destinataire
* Configure XML for send SMS at recipient
*/

$(function () {
	$('#message').keyup(function () {
		var x = $('#message').val();

		var ligne = x.match(/(\r\n|\n|\r)/g);
		var plus = 0;
		if (ligne != null) {
			plus = ligne.length;
		}

		$('#taille').html(x.length + plus + " caractères");
	});
});

// Envois XML avec les informations
// Send XML with informations
function sendXML() {
	var login = document.getElementById('login').value;
	var password = document.getElementById('password').value;
	var sender = document.getElementById('sender').value;
	var destinataire = document.getElementById('destinataire').value;
	var message = document.getElementById('message').value;

	document.sendSMS.XML.value = "<sms><authentification><username>" + login + "</username><password>" + password + "</password></authentification><message><sender>" + sender +"</sender><text>" + message + "</text></message><recipients><gsm gsmsmsid=\"\">" + destinataire +"</gsm></recipients></sms>" ;
	document.getElementById('sendSMS').submit();
}

// Affiche les informations enregistrer
// Show informations register
function main() {
	var login = document.getElementById('login');
	var password = document.getElementById('password');
	var sender = document.getElementById('sender');

	if (typeof Storage !== "undefined") {
		login.value = localStorage['SMSFactorlogin'];
		password.value = localStorage['SMSFactorpassword'];
		sender.value = localStorage['SMSFactorsender'];
	}
}

window.addEventListener("load", main);

document.addEventListener('DOMContentLoaded', function () {
	var send = document.getElementById('envois');

	if(send){
		send.addEventListener('click', sendXML, false);
	}
});