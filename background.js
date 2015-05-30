/*
* Evènement en tâche de fond
* Evenement in background
*/

// Toutes les 2 secondes ajoute informations dans le badge de couleur noir
// Interval 2 seconds add informations on the black badge
setInterval (function() {
	chrome.browserAction.setBadgeBackgroundColor({ color: "#000"});
	chrome.browserAction.setBadgeText({'text' : "12"});
},2000);