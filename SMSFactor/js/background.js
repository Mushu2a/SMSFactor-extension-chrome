/*
* Evènement en tâche de fond
* Evenement in background
*/

function jsoncallback(data){
	chrome.browserAction.setBadgeBackgroundColor({ color: "#000"});
	chrome.browserAction.setBadgeText({'text' : data.credit});
}

// Toutes les 2 secondes ajoute informations dans le badge de couleur noir
// Interval 2 seconds add informations on the black badge
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