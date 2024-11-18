window.onload = init;

function init() {

  document.getElementById("password_field").addEventListener("keypress", testPass);
  // localStorage.setItem("mdp", "azerty");
  // let result = testPass(localStorage.getItem("mdp"));
  // console.log(result);
  
}
function testPass() {
    let mdp = document.getElementById("password_field").value;
    console.log("valeur motdepasse " + mdp);
    let taille = mdp.length;
    var chiffre = new RegExp("[0-9]", "gi");
    var special = new RegExp("[^a-zA-Z0-9]", "gi");

    if (chiffre.test(mdp) && special.test(mdp) && taille > 6) {
      // TODO affecter le truc visuel qui dit ce qu'est le mdp  fort   
      
    }

    if (chiffre.test(mdp) || (special.test(mdp) && taille > 6)) {
      // TODO affecter le truc visuel qui dit ce qu'est le mdp  moyen
      
    }
    // TODO affecter le truc visuel qui dit ce qu'est le mdp faible 
    
   
  }