/*
* Réglage du compte SMSFactor
* Setting account SMSFactor
*/

// Affiche/cache le mot de passe
// Show/hide password
function showPassword() {
	if(document.getElementById('check').checked == true){
		document.getElementById('Rpassword').type = 'text';
	}
	else{
		document.getElementById('Rpassword').type = 'password';
	}
}

// Sauvegade les modifications
// Save the modifications
function sauvegarde() {
	var login = document.getElementById('Rlogin');
	var password = document.getElementById('Rpassword');
	var sender = document.getElementById('Rsender');

	localStorage['SMSFactorlogin'] = login.value;
	localStorage['SMSFactorpassword'] = password.value;
	localStorage['SMSFactorsender'] = sender.value;

	chrome.browserAction.setBadgeBackgroundColor({ color: "#00FF00"});
	chrome.browserAction.setBadgeText({'text' : "OK"});

	chrome.runtime.reload();
}

// Affiche les réglages déjà enregistrer
// Show settings already register
function reglageCompte() {
	var login = document.getElementById('Rlogin');
	var password = document.getElementById('Rpassword');
	var sender = document.getElementById('Rsender');

	if (typeof Storage !== "undefined") {
		login.value = localStorage['SMSFactorlogin'];
		password.value = localStorage['SMSFactorpassword'];
		sender.value = localStorage['SMSFactorsender'];
	}
}

window.addEventListener("load", reglageCompte);

document.addEventListener('DOMContentLoaded', function () {
	var save = document.getElementById('sauvegarde');
	var check = document.getElementById('check');
	if(save){
		save.addEventListener('click', sauvegarde, false);
	}

	check.addEventListener('click', showPassword, false);
});