/*
* Evènement en tâche de fond
* Event in background
*/

// Fonction de retour permettant d'obtenir le(s) crédits et l'affhiche dans le badge noir
// Function callback get credit(s) account and show in the black badge
function jsoncallback(data){
	chrome.browserAction.setBadgeBackgroundColor({ color: "#000"});
	chrome.browserAction.setBadgeText({'text' : data.credit});
}

// Toutes les secondes vérifie le(s) crédit du compte SMSFactor en AJAX (GET)
// Interval seconds check credit account SMSFactor with AJAX (GET)
setInterval (function() {
	$(document).ready(function(){
		login = localStorage['SMSFactorlogin'];
		password = localStorage['SMSFactorpassword'];

		$.ajax({
			url: 'https://backoffice.smsfactor.com/backoffice/api.php',
			type: "GET",
			data: "login="+login+"&password="+password,
			dataType: "jsonp"
		});
	});
},1000);