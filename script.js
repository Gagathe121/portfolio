// === Gestion du bouton "À propos" ===
document.getElementById("toggle-apropos").addEventListener("click", function() {
    const apropos = document.getElementById("apropos-content");
      if (apropos.style.display === "" || apropos.style.display === "none") { // Vérifie l'état actuel et bascule entre "none" et "block"
      apropos.style.display = "block";
      apropos.scrollIntoView({ behavior: "smooth" }); // Défilement vers le bas de la page pour afficher le texte
    } else {
      apropos.style.display = "none"; // Masque le texte par défaut
    } 
  });

  function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isHidden = (section.style.display === "none" || section.style.display === "");
    
    
    section.style.display = isHidden ? "block" : "none"; // Affiche la section (et cache les autres si besoin)

    if (isHidden) {
                 section.scrollIntoView({ behavior: "smooth" }); // Scroll vers la section
                
    }
}