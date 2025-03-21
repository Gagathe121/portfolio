function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isHidden = (section.style.display === "none" || section.style.display === "");
    
    
    section.style.display = isHidden ? "block" : "none"; // Affiche la section (et cache les autres si besoin)

    if (isHidden) {
                 section.scrollIntoView({ behavior: "smooth" }); // Scroll vers la section
                
    }
}