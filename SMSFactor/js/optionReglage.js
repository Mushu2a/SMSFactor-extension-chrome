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
	localStorage['SMSFactorcolor'] = localStorage['SMSFactorcolor'];

	chrome.browserAction.setBadgeBackgroundColor({ color: "#00FF00"});
	chrome.browserAction.setBadgeText({'text' : "OK"});
	window.close();
}

// Affiche les réglages déjà enregistrer
// Show settings already register
function reglageCompte() {
	document.getElementById("tabs1").style.opacity = "1";
	document.getElementById("tabs2").style.opacity = "0.8";

	document.getElementById("sauvegarde").onmouseover = function() {
		this.style.opacity = "0.8";
	}
	document.getElementById("sauvegarde").onmouseout = function() {
		this.style.opacity = "1";
	}

	document.getElementById("envois").onmouseover = function() {
		this.style.opacity = "0.8";
	}
	document.getElementById("envois").onmouseout = function() {
		this.style.opacity = "1";
	}

	var login = document.getElementById('Rlogin');
	var password = document.getElementById('Rpassword');
	var sender = document.getElementById('Rsender');

	if (typeof Storage !== "undefined") {
		login.value = localStorage['SMSFactorlogin'];
		password.value = localStorage['SMSFactorpassword'];
		sender.value = localStorage['SMSFactorsender'];

		if (localStorage['SMSFactorcolor'] == "orange") {
			$("#orange").click();
			document.getElementById("orange").checked = true;
		};

		if (localStorage['SMSFactorcolor'] == "green") {
			$("#green").click();
			document.getElementById("green").checked = true;
		};

		if (localStorage['SMSFactorcolor'] == "cyan") {
			$("#cyan").click();
			document.getElementById("cyan").checked = true;
		};

	} else {
		localStorage['SMSFactorlogin'] = "";
		localStorage['SMSFactorpassword'] = "";
		localStorage['SMSFactorsender'] = "";
		localStorage['SMSFactorcolor'] = "";
	}
}

// Gestion couleur Orange et modification du thème
// Orange gestion color and update theme
function orange() {
	$('div').css('background', '#ee8126');
	$('label').css('background', '#ee8126');
	$('input').css('background', '#009dda');
	$('textarea').css('background', '#009dda');

	document.getElementById("tabs1").onmouseover = function() {
		this.style.backgroundColor = "#ee8126";
		this.style.opacity = "1";
		document.getElementById("tabs2").style.opacity = "0.8";
	}
	document.getElementById("tabs2").onmouseover = function() {
		this.style.backgroundColor = "#ee8126";
		this.style.opacity = "1";
		document.getElementById("tabs1").style.opacity = "0.8";
	}
	document.getElementById("tabs1").onmouseout = function() {
		this.style.backgroundColor = "#ee8126";
		this.style.opacity = "0.8";
		document.getElementById("tabs1").style.opacity = "1";
	}
	document.getElementById("tabs2").onmouseout = function() {
		this.style.backgroundColor = "#ee8126";
		this.style.opacity = "0.8";
		document.getElementById("tabs2").style.opacity = "1";
	}

	localStorage['SMSFactorcolor'] = "orange";
}

// Gestion couleur Vert et modification du thème
// Green gestion color and update theme
function green() {
	$('div').css('background', '#97c00e');
	$('label').css('background', '#97c00e');
	$('input').css('background', '#ee8126');
	$('textarea').css('background', '#ee8126');

	document.getElementById("tabs1").onmouseover = function() {
		this.style.backgroundColor = "#97c00e";
		this.style.opacity = "1";
		document.getElementById("tabs2").style.opacity = "0.8";
	}
	document.getElementById("tabs2").onmouseover = function() {
		this.style.backgroundColor = "#97c00e";
		this.style.opacity = "1";
		document.getElementById("tabs1").style.opacity = "0.8";
	}
	document.getElementById("tabs1").onmouseout = function() {
		this.style.backgroundColor = "#97c00e";
		this.style.opacity = "0.8";
		document.getElementById("tabs1").style.opacity = "1";
	}
	document.getElementById("tabs2").onmouseout = function() {
		this.style.backgroundColor = "#97c00e";
		this.style.opacity = "0.8";
		document.getElementById("tabs2").style.opacity = "1";
	}

	localStorage['SMSFactorcolor'] = "green";
}

// Gestion couleur Cyan et modification du thème
// Cyan gestion color and update theme
function cyan() {
	$('div').css('background', '#009dda');
	$('label').css('background', '#009dda');
	$('input').css('background', '#97c00e');
	$('textarea').css('background', '#97c00e');

	document.getElementById("tabs1").onmouseover = function() {
		this.style.backgroundColor = "#009dda";
		this.style.opacity = "1";
		document.getElementById("tabs2").style.opacity = "0.8";
	}
	document.getElementById("tabs2").onmouseover = function() {
		this.style.backgroundColor = "#009dda";
		this.style.opacity = "1";
		document.getElementById("tabs1").style.opacity = "0.8";
	}
	document.getElementById("tabs1").onmouseout = function() {
		this.style.backgroundColor = "#009dda";
		this.style.opacity = "0.8";
		document.getElementById("tabs1").style.opacity = "1";
	}
	document.getElementById("tabs2").onmouseout = function() {
		this.style.backgroundColor = "#009dda";
		this.style.opacity = "0.8";
		document.getElementById("tabs2").style.opacity = "1";
	}

	localStorage['SMSFactorcolor'] = "cyan";
}

window.addEventListener("load", reglageCompte);

document.addEventListener('DOMContentLoaded', function () {
	var save = document.getElementById('sauvegarde');
	var check = document.getElementById('check');
	var colorOrange = document.getElementById('orange');
	var colorGreen = document.getElementById('green');
	var colorCyan = document.getElementById('cyan');

	if(save){
		save.addEventListener('click', sauvegarde, false);
	}

	if(check){
		check.addEventListener('click', showPassword, false);
	}

	if(colorOrange){
		colorOrange.addEventListener('click', orange, false);
	}

	if(colorGreen){
		colorGreen.addEventListener('click', green, false);
	}

	if(colorCyan){
		colorCyan.addEventListener('click', cyan, false);
	}
});