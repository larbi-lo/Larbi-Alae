// Ajouter un écouteur d'événement pour le survol du bouton
document.getElementById("loginBtn").addEventListener("mouseover", function() {
  document.getElementById("loginContainer").style.backgroundColor = "#f1f1f1";
});

// Ajouter un écouteur d'événement pour le clic sur le bouton de connexion
document.getElementById("loginBtn").addEventListener("click", function() {
  document.getElementById("loginContainer").style.backgroundColor = "#ffffff";
});
