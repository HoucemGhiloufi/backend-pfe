function getContractsBySearchTerm(contrats, termeRecherche) {
    return contrats.filter(contrat => {
      return (
        contrat.title.toLowerCase().includes(termeRecherche.toLowerCase()) ||
        contrat.snippet.toLowerCase().includes(termeRecherche.toLowerCase())
      );
    });
  }
  
  // Ajoutez d'autres fonctions ou utilitaires au besoin
  
  // Exportez les fonctions ou utilitaires pour les rendre disponibles dans d'autres fichiers
  module.exports = {
    getContractsBySearchTerm,
    // ... (autres fonctions ou utilitaires)
  };